import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { FaRocket } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    // Navbar entry animation
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);

  const links = ["Home", "About", "Services", "Contact"];

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full bg-gradient-to-r from-black via-gray-900 to-black border-b border-white/10 backdrop-blur-xl z-50 shadow-[0_0_30px_rgba(0,0,0,0.8)]"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* LOGO */}
        <h1 className="flex items-center gap-2 text-white text-2xl font-bold tracking-widest cursor-pointer group">
  <FaRocket className="text-blue-400 group-hover:rotate-12 transition duration-300" />
  
  <span className="relative">
    ITZ FIZZ
    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 group-hover:w-full transition-all duration-300"></span>
  </span>
</h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-10 text-white font-medium">
          {links.map((link, i) => (
            <li
              key={i}
              className="relative cursor-pointer group"
            >
              {link}
              {/* underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* BURGER ICON */}
        <div
          className="md:hidden flex flex-col gap-1 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`w-6 h-[2px] bg-white transition-all ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-[2px] bg-white transition-all ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-[2px] bg-white transition-all ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-black text-white flex flex-col items-center gap-6 overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-60 py-6" : "max-h-0"
        }`}
      >
        {links.map((link, i) => (
          <p
            key={i}
            className="cursor-pointer text-lg hover:text-blue-400 transition"
          >
            {link}
          </p>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;