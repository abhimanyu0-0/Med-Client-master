// import {React,useState} from "react";
// import "./Header.css";
// import logo from ".//../../assets/Medpharm logo Final/logo transparent.png";
// import { CiMobile3 } from "react-icons/ci";
// import { BsPerson } from "react-icons/bs";
// import { BsCart2 } from "react-icons/bs";
// import { CiDiscount1 } from "react-icons/ci";
// import { AiFillCaretDown } from "react-icons/ai";
// import DrawerExample from "../Drawers/DrawerExample";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const Header = () => {
//     const navigate = useNavigate();
//     const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//     const items = useSelector((state)=>state.cart);
//     const handleDrawerClose = () => {
//         setIsDrawerOpen(false);
//       };

//   return (
//     <nav className="flex flex-row justify-between p-2 pt-3 bg-white">
//       <div className="flex items-center px-10">
//         <img className="h-8 mr-5" src={logo} alt="MedPharma Logo" />
//         <span className="flex items-center cursor-pointer">
//           <span
//             className="inline-block align-middle border-l-2 border-gray-300 h-8"
//             style={{ lineHeight: "1.25" }}
//           ></span>
//           <span className="whitespace-normal mx-5">
//             <span className="text-gray-500 text-xs">
//               Delivering to 94016
//               <AiFillCaretDown className="inline mx-1" />
//             </span>
//             <br />
//             <span className="text-sm">San Francisco, California</span>
//           </span>
//         </span>
//       </div>

//       <div className="flex items-center px-10 cursor-pointer">
//         <span className="flex inline mr-6 bg-[#eef4ff] p-3 rounded-lg hover:bg-gray-200 transition-all">
//           <CiMobile3 className="mr-2 mt-1" />
//           Download App
//         </span>
//         <span onClick={()=>setIsDrawerOpen(true)} className="flex inline mr-6 nav-items-right ">
//           <BsPerson className="mr-2 mt-1" />
//           Hello, Log in
//         </span>

//         <span className="flex inline mr-6 nav-items-right">
//           <CiDiscount1 className="mr-2 mt-1" />
//           Offers
//         </span>
//         <span onClick={()=>navigate("/cart")} className="flex inline mr-6 nav-items-right">
//           <BsCart2 className="mr-2 mt-1" />
//           Cart({items.cartItems&&items.cartItems.length})
//         </span>
//       </div>
//     <DrawerExample onClose={handleDrawerClose} isOpen={isDrawerOpen}/>

//     </nav>
//   );
// };

// export default Header;

import React, { useState } from "react";
import logo from ".//../../assets/Medpharm logo Final/logo transparent.png";
import { CiMobile3 } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";
import { BsCart2 } from "react-icons/bs";
import { CiDiscount1 } from "react-icons/ci";
import { AiFillCaretDown } from "react-icons/ai";
import DrawerExample from "../Drawers/DrawerExample";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ClassNames } from "@emotion/react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const items = useSelector((state) => state.cart);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();
  return (
    <nav className="bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 cursor-pointer">
              <div className="text-black">
                <img className="h-8" src={logo} alt="logo" />
              </div>
            </div>
          </div>
          <div className="hidden md:block cursor-pointer">
            <div className="ml-10 flex items-baseline space-x-4">
              <span
                href="#"
                className="text-black hover:text-[#10847e] px-3 py-2 rounded-md text-sm font-medium"
              >
                <BsPerson className="mr-2 mt-1" />
                Log In
              </span>

              <span
                href="#"
                className="text-black hover:text-[#10847e] px-3 py-2 rounded-md text-sm font-medium"
              >
                <span>
                  <CiDiscount1 className="mr-2 mt-1" />
                </span>
                Offers
              </span>
              <span
                href="#"
                className="hover:text-[#10847e] text-black nav-items-right px-3 py-2 rounded-md text-sm font-medium"
              >
                <BsCart2 className="mr-2 mt-1" />
                <span onClick={() => navigate("/cart")}>
                  Cart({items.cartItems && items.cartItems.length})
                </span>
              </span>

              {/* Add more links as needed */}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-black hover:bg-gray-200 focus:outline-none focus:bg-gray-200 focus:text-black"
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            onClick={()=>navigate("/cart")}
            className="text-black hover:bg-gray-200 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
          >
            Cart
          </a>
          <a
            onClick={()=>navigate("/")}
            className="text-black hover:bg-gray-200 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
          >
            Login
          </a>
          {/* Add more links as needed */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
