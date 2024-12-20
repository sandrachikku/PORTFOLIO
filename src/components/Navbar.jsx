import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Close menu on section click
    }
  };

  return (
    <nav
      className={`w-full flex items-center py-3 pl-96 fixed top-0 z-20 ${
        scrolled ? "bg-black shadow-md" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-end items-center max-w-7xl mx-auto px-4">
        {/* Desktop Menu */}
        <ul className="hidden sm:flex flex-row gap-8 text-white">
          <li
            className="hover:text-gray-300 text-[18px] font-medium cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            Home
          </li>
          <li
            className="hover:text-gray-300 text-[18px] font-medium cursor-pointer"
            onClick={() => scrollToSection("about")}
          >
            Profile
          </li>
          <li
            className="hover:text-gray-300 text-[18px] font-medium cursor-pointer"
            onClick={() => scrollToSection("education")}
          >
            Education
          </li>
          <li
            className="hover:text-gray-300 text-[18px] font-medium cursor-pointer"
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </li>
          <li
            className="hover:text-gray-300 text-[18px] font-medium cursor-pointer"
            onClick={() => scrollToSection("exp")}
          >
            Projects
          </li>
          <li
            className="hover:text-gray-300 text-[18px] font-medium cursor-pointer"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </li>
        </ul>
        {/* Hamburger Icon */}
        <div
          className="sm:hidden text-white text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden bg-black text-white absolute top-14 right-0 w-full flex flex-col items-center py-4">
          <ul className="flex flex-col gap-4">
            <li
              className="hover:text-gray-300 text-[18px] font-medium cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              Home
            </li>
            <li
              className="hover:text-gray-300 text-[18px] font-medium cursor-pointer"
              onClick={() => scrollToSection("about")}
            >
              Profile
            </li>
            <li
              className="hover:text-gray-300 text-[18px] font-medium cursor-pointer"
              onClick={() => scrollToSection("education")}
            >
              Education
            </li>
            <li
              className="hover:text-gray-300 text-[18px] font-medium cursor-pointer"
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </li>
            <li
              className="hover:text-gray-300 text-[18px] font-medium cursor-pointer"
              onClick={() => scrollToSection("exp")}
            >
              Projects
            </li>
            <li
              className="hover:text-gray-300 text-[18px] font-medium cursor-pointer"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
