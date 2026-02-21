import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-8">

          {/* Logo */}
          <h1 className="text-2xl font-bold logo">JIDE PENIEL</h1>

          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <ul className="flex gap-6 items-center">
              <li className="hover:text-gray-300 cursor-pointer">SIGN UP</li>
              <li className="hover:text-gray-300 cursor-pointer">LOG IN</li>
              <li>
                <a href="https://www.facebook.com/peniel.actors/" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="hover:text-blue-500" />
                </a>
              </li>
              <li>
                <FaInstagram className="hover:text-pink-500 cursor-pointer" />
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=aZjlsGmlf78" target="_blank" rel="noopener noreferrer">
                  <FaYoutube className="hover:text-red-500" />
                </a>
              </li>
              <li>
                <FaXTwitter className="hover:text-gray-400 cursor-pointer" />
              </li>
              <li className="text-sm hover:text-gray-300 cursor-pointer">
                ABOUT
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden pb-4">
            <ul className="flex flex-col gap-4">
              <li className="hover:text-gray-300 cursor-pointer">SIGN UP</li>
              <li className="hover:text-gray-300 cursor-pointer">LOG IN</li>
              <li>
                <a href="https://www.facebook.com/peniel.actors/" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
              <li>Instagram</li>
              <li>
                <a href="https://www.youtube.com/watch?v=aZjlsGmlf78" target="_blank" rel="noopener noreferrer">
                  YouTube
                </a>
              </li>
              <li>X (Twitter)</li>
              <li>About</li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
