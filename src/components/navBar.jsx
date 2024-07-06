import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="bg-lightPink p-4">
      <div className="flex justify-between items-start pt-2 px-4 overflow-hidden">
        <div className="block lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center px-3 py-2 border rounded text-red border-red hover:text-beige hover:border-beige"
          >
            {isMenuOpen ? <AiOutlineClose /> : <FiMenu />}
          </button>
        </div>
        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:justify-between lg:w-auto ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="text-sm font-Paradose" style={{ fontSize: "24px" }}>
            <a
              href="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-red hover:text-beige mr-4"
            >
              The Spark Collective
            </a>
          </div>

          <div
            className="flex space-x-4 font-Paradose"
            style={{ fontSize: "24px" }}
          >
            <a
              href="/discover"
              className="block mt-4 lg:inline-block lg:mt-0 text-red hover:text-beige"
            >
              Discover
            </a>
            <a
              href="/community"
              className="block mt-4 lg:inline-block lg:mt-0 text-red hover:text-beige"
            >
              Community
            </a>
            <a
              href="/resource-library"
              className="block mt-4 lg:inline-block lg:mt-0 text-red hover:text-beige"
            >
              Resource Library
            </a>
            <a
              href="/profile"
              className="block mt-4 lg:inline-block lg:mt-0 text-red hover:text-beige"
            >
              Profile
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
