"use client";

import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav
      className="flex w-full items-center justify-between border border-neutral-200 px-4 py-4 dark:border-neutral-800">
      <div className="flex items-center gap-2">
        <h1 className="font-bold md:text-xl text-gray-700 dark:text-gray-300"><span className="text-red-400">H</span>Care</h1>
      </div>
      <div className="px-4 invisible md:visible ">
        <ul className="flex gap-10 text-gray-700 dark:text-gray-300">
            <Link className="hover:cursor-pointer hover:text-red-400" to="hero" smooth={true} duration={500}>
                Home
            </Link>
            <Link className="hover:cursor-pointer hover:text-red-400" to="userGuide" smooth={true} duration={500}>
                How to use
            </Link>
            <Link className="hover:cursor-pointer hover:text-red-400" to="testimonials" smooth={true} duration={1500}>
                Testimonials
            </Link>
            <Link className="hover:cursor-pointer hover:text-red-400" to="predictorform" smooth={true} duration={1500}>
                Predict
            </Link>
        </ul>
      </div>
      {/* <button
        className="w-24 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 md:w-32 dark:bg-white dark:text-black dark:hover:bg-gray-200">
        Login
      </button> */}
    </nav>
  );
};

export default Navbar;