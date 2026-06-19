'use client';

import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const navLinks = ['Home', 'About Us', 'Services', 'Testimonials'];

  return (
    <>
      {/* Fixed header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <nav className="w-full">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex justify-between items-center h-[60px]">

              {/* Logo */}
              <a href="#" className="flex items-center gap-2 flex-shrink-0 no-underline">
                <div className="w-7 h-7 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold text-sm italic">
                  i
                </div>
                <span className="text-gray-900 font-bold text-[15px]">infotuk</span>
              </a>

              {/* Desktop Nav Links */}
              <div className="hidden md:flex items-center gap-7">
                {navLinks.map((item) => (
                  
                   <a key={item}
                    href="#"
                    className="text-gray-700 text-[13.5px] font-normal hover:text-blue-600 transition-colors no-underline whitespace-nowrap"
                  >
                    {item}
                  </a>
                ))}
              </div>

              {/* Desktop CTA */}
              <div className="hidden md:flex items-center gap-3 flex-shrink-0">
                {/* <button className="text-gray-700 text-[13.5px] hover:text-blue-600 transition-colors bg-transparent border-none cursor-pointer">
                  Log In
                </button> */}
                <button className="bg-blue-600 hover:bg-blue-700 text-white text-[13px] font-medium px-[18px] py-2 rounded-md transition-colors whitespace-nowrap">
                  Contact Us
                </button>
              </div>

              {/* Hamburger — mobile only */}
              <button
                className="md:hidden flex flex-col gap-[5px] items-center justify-center p-1.5 bg-transparent border-none cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                <span
                  className={`block w-[22px] h-[2px] bg-gray-700 rounded-sm origin-center transition-all duration-300 ${
                    isOpen ? 'translate-y-[7px] rotate-45' : ''
                  }`}
                />
                <span
                  className={`block w-[22px] h-[2px] bg-gray-700 rounded-sm transition-all duration-300 ${
                    isOpen ? 'opacity-0 scale-x-0' : ''
                  }`}
                />
                <span
                  className={`block w-[22px] h-[2px] bg-gray-700 rounded-sm origin-center transition-all duration-300 ${
                    isOpen ? '-translate-y-[7px] -rotate-45' : ''
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown — overlays content, does NOT push down */}
          {isOpen && (
            <div className="md:hidden absolute top-[60px] left-0 right-0 bg-white border-t border-gray-200 shadow-lg px-6 pb-5 pt-3 flex flex-col">
              {navLinks.map((item, i) => (
                
                <a  key={item}
                  href="#"
                  onClick={closeMenu}
                  className={`text-gray-700 hover:text-blue-600 text-sm font-normal py-2.5 no-underline transition-colors ${
                    i < navLinks.length - 1 ? 'border-b border-gray-100' : ''
                  }`}
                >
                  {item}
                </a>
              ))}
              <div className="flex flex-col gap-2 mt-3.5">
                {/* <button className="text-gray-700 hover:text-blue-600 border border-gray-200 hover:border-blue-600 bg-transparent rounded-md py-2.5 text-sm transition-colors cursor-pointer">
                  Log In
                </button> */}
                <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2.5 text-sm font-medium transition-colors cursor-pointer">
                  Contact Us
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Spacer so hero doesn't hide behind the fixed header */}
      <div className="h-[60px]" />
    </>
  );
}