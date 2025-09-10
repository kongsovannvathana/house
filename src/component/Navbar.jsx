import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";

export default function Navbar() {
  const [menu, setMenu] = useState(true);
  return (
    // ------------lg screen--------------
    <>
      <nav className="hidden lg:flex w-full h-[70px] shadow-md flex justify-evenly">
        <div className="w-[30%] h-full flex flex-start">
          <img
            src="/logo.png"
            alt=""
            className="w-[30%] h-[100%] object-cover ml-4"
          />
        </div>
        <div className="w-[70%] h-full flex justify-evenly">
          <ul className="w-[80%] h-full flex justify-evenly items-center">
            <li className="hover:text-blue-500 duration-200 cursor-pointer">
              Home
            </li>
            <li className="hover:text-blue-500 duration-200 cursor-pointer">
              House
            </li>
            <li className="hover:text-blue-500 duration-200 cursor-pointer">
              Room
            </li>
            <li className="hover:text-blue-500 duration-200 cursor-pointer">
              About
            </li>
            <li className="hover:text-blue-500 duration-200 cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
      </nav>

      {/* -------------md screen------------- */}
      <div className="lg:hidden w-full h-[70px] shadow-md flex">
        <div className="w-[30%] h-full">
          <img
            src="/logo.png"
            alt=""
            className="w-[60px] h-[65px] object-cover ml-2"
          />
        </div>
        <div
          className="w-[70%] h-full flex justify-end px-3 items-center z-50"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <MdOutlineMenu /> : <MdOutlineClose />}
        </div>
      </div>

      {/* -----------slide left----------- */}
      <div
        className={`lg:hidden w-[50%] h-full bg-white shadow-md fixed top-0 left-0 z-40 duration-200 ${
          menu ? `-translate-x-full` : `translate-x-0`
        }`}
      >
        <ul className="w-[80%] h-full pl-4 pt-4 space-y-4">
          <li className="hover:text-blue-500 duration-200 cursor-pointer">
            Home
          </li>
          <li className="hover:text-blue-500 duration-200 cursor-pointer">
            House
          </li>
          <li className="hover:text-blue-500 duration-200 cursor-pointer">
            Room
          </li>
          <li className="hover:text-blue-500 duration-200 cursor-pointer">
            About
          </li>
          <li className="hover:text-blue-500 duration-200 cursor-pointer">
            Contact
          </li>
        </ul>
      </div>

      {/* --------slide right------------ */}
      <div
        className={`w-[50%] h-full fixed right-0 ${
          menu ? `translate-x-full` : `-translate-x-0`
        }`}
        onClick={() => setMenu(!menu)}
      ></div>
    </>
  );
}
