import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/panel.css";

import { RxCross1 } from "react-icons/rx";
import { AiFillCaretDown, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import axios from "axios";
import { BiChevronDown } from "react-icons/bi";
import logo from "../assets/images/logo.svg";
import logomain from "../assets/images/lg2.png";
export default function New_Nav() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const a = 1;

  const [link1, setLink1] = useState(false);
  const [link2, setLink2] = useState(false);
  const [link3, setLink3] = useState(false);
  const [link4, setLink4] = useState(false);

  const [menu, setMenu] = useState(false);
  const [close, setClose] = useState(false);

  // const [ mlink1, setMlink1 ] = useState(false);
  // const [ mlink2, setMlink2 ] = useState(false);
  // const [ mlink3, setMlink3 ] = useState(false);
  // const [ mlink4, setMlink4 ] = useState(false);

  const setMlink1 = () => {
    if (link1 == true) {
      setLink1(false);
    } else {
      setLink1(true);
    }
  };
  const setMlink2 = () => {
    if (link2 == true) {
      setLink2(false);
    } else {
      setLink2(true);
    }
  };
  const setMlink3 = () => {
    if (link3 == true) {
      setLink3(false);
    } else {
      setLink3(true);
    }
  };
  const setMlink4 = () => {
    if (link4 == true) {
      setLink4(false);
    } else {
      setLink4(true);
    }
  };

  return (
    <>
      <nav className="w-full fixed z-10 top-0 bg-gradient-to-b from-[#660E9F] p-4 to-[#25023A00]   overflow-hidden lg:overflow-visible">
        <div className="lg:max-w-[1200px] m-auto   flex   justify-between items-center md:px-4">
          <Link to="/">
            <div className="h-[32px] cursor-pointer">
              <img src={logomain} className="h-full" />
            </div>
          </Link>
          <ul className="lg:flex hidden items-center font-medium h-[30px]">
            <Link to="/">
              <li className="px-2 cursor-pointer  h-[30px] m-2  w-[90px]">
                <div className="flex items-center">
                  <p className="text-white">Home</p>
                </div>
              </li>
            </Link>
            <li className="px-2 cursor-pointer h-[30px] m-2  w-[90px]">
              <div className="flex items-center">
                <p className="text-white">Contact</p>
              </div>
            </li>

            <li
              className="px-2 cursor-pointer h-[30px] m-2  w-[90px]"
              onMouseOver={() => setLink2(true)}
              onMouseOut={() => setLink2(false)}
            >
              <div className="flex items-center">
                <p className="text-white">About</p>
                <AiFillCaretDown size={15} color="white" className="ml-[2px]" />
              </div>
              <div className={link2 ? "block" : "hidden"}>
                <ul className="listitems p-4  mt-2  bg-black     w-[170px]  rounded-md">
                  <li className="text-[#9A9EA8] text-[15px] hover:text-fuchsia-100">
                    View
                  </li>
                  <li className="text-[#9A9EA8] text-[15px] mt-2 hover:text-fuchsia-100">
                    Monetization
                  </li>
                  <li className="text-[#9A9EA8] text-[15px] mt-2 hover:text-fuchsia-100">
                    Subscribers
                  </li>
                  <li className="text-[#9A9EA8] text-[15px] mt-2 hover:text-fuchsia-100">
                    Analytics
                  </li>
                  <li className="text-[#9A9EA8] text-[15px] mt-2 hover:text-fuchsia-100">
                    All Tips & Insights
                  </li>
                </ul>
              </div>
            </li>

            <li className="px-2    ">
              <Link to="/dashboard">
                <button className="btn border-none bg-[#1f2937] hover:bg-[#1f2937] p-2 rounded-full px-6 text-center  text-white font-bold ">
                  Get Started
                </button>
              </Link>
            </li>
          </ul>

          <div
            className={
              menu
                ? "hidden"
                : "menuicon lg:hidden text-[#8144e5] underline font-semibold cursor-pointer"
            }
            onClick={() => {
              setMenu(true);
              setClose(true);
            }}
          >
            <AiOutlineMenu size={25} color="#fff" />
          </div>
          <div
            className={
              close
                ? "menuicon lg:hidden text-[#8144e5] underline font-semibold cursor-pointer"
                : "hidden"
            }
            onClick={() => {
              setClose(false);
              setMenu(false);
            }}
          >
            <AiOutlineClose size={25} color="#fff" />
          </div>
        </div>

        <div
          className={
            menu
              ? "bg-[#121521]  lg:hidden h-[100vh] block overflow-hidden"
              : "hidden"
          }
        >
          <ul className="text-white py-[20px] h-full">
            <li className="h-[40px] text-white cursor-pointer">
              <div className="flex items-center justify-between">
                <p className="px-4">Home</p>
              </div>
            </li>
            <li className="h-[40px] text-white cursor-pointer">
              <div className="flex items-center justify-between">
                <p className="px-4">Contact</p>
              </div>
            </li>
            <li className="h-[40px] text-white cursor-pointer">
              <div className="flex items-center justify-between">
                <p className="px-4">About</p>
              </div>
            </li>
            <li className="h-[40px] text-white cursor-pointer">
              <div className="flex items-center">
                <Link to="/dashboard">
                  <button className=" bg-[#2B9DFF] hover:bg-[#2B9DFF] p-2 rounded-full px-6 text-center  text-white font-bold ">
                    Get Started
                  </button>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
