import { useEffect, useRef } from "react";
import gsap from "gsap";

const Stats = () => {
  const statsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      statsRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
      }
    );
  }, []);

  const data = [
    { value: "95%", label: "Performance" },
    { value: "90%", label: "Design" },
    { value: "85%", label: "Speed" },
  ];

  return (
    <div className="flex gap-10 mt-10">
      {data.map((item, i) => (
        <div
          key={i}
          ref={(el) => (statsRef.current[i] = el)}
          className="text-center"
        >
          <h2 className="text-3xl font-bold">{item.value}</h2>
          <p className="text-gray-400">{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;