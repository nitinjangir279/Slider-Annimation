import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Bus from "../assets/wheel.png";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const lettersRef = useRef([]);
  const busRef = useRef(null);
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  const text = "WELCOME ITZ FIZZ";


  useEffect(() => {
    // ✅ FIX: clear refs before animation
    const letters = lettersRef.current;

    // TEXT ANIMATION
    gsap.fromTo(
      letters,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.08,
        duration: 1,
        ease: "power3.out",
      }
    );

    // GET TEXT WIDTH
    const textWidth = textRef.current.offsetWidth;

    // SCROLL ANIMATION
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=1500",
        scrub: true,
        pin: true,
        // markers: true, // 👈 enable if debugging
      },
    });
   


    // Step 1: Bus enters
    tl.fromTo(
      busRef.current,
      {
        x: 120,
        y: -70,
        opacity: 1,
      },
      {
        x: 1500,
        y: -70,
        duration: 1,
      }
    );

    // Step 2: Move across text
    tl.to(busRef.current, {
      x: textWidth + 200,
      duration: 3,
      ease: "power1.inOut",
    });

    // Step 3: Fade out
    tl.to(busRef.current, {
      opacity: 0,
      duration: 1,
    });

        // Step 0: Wheel rotation (continuous while scrolling)
tl.to(
  busRef.current,
  {
    rotate: 1020, // 2 full rotations
    ease: "none",
    duration: 5,
  },
  0 // start from beginning
);
// UNDERLINE ANIMATION
tl.fromTo(
  textRef.current,
  {
    backgroundSize: "0% 3px",
  },
  {
    backgroundSize: "100% 3px",
    duration: 2,
    ease: "power2.out",
  },
  0 // sync with scroll start
);

    // ✅ CLEANUP (VERY IMPORTANT)
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    
    <div
      ref={sectionRef}
      className="h-screen flex flex-col justify-center items-center relative overflow-hidden bg-black"
    >
        
        
      {/* TEXT */}
      <h1
        ref={textRef}
        className="text-6xl tracking-[0.6em] text-center z-30 relative text-white font-[Orbitron] uppercase bg-[linear-gradient(yellow,yellow)] bg-no-repeat bg-[length:0%_3px] bg-[position:center_100%]"

      >
        {text.split("").map((char, i) => (
          <span
            key={i}
            ref={(el) => (lettersRef.current[i] = el)}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>

      {/* BUS */}
      <img
        ref={busRef}
        src={Bus}
        alt="bus"
        origin-center
        className="w-30 absolute bottom-20 left-0 z-20 drop-shadow-2xl transition-transform duration-300 hover:rotate-6"
      />
    </div>
  );
};

export default Hero;