import React from "react";
import "./Nav.css";
import { ClassNames } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Nav = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  let timeoutId;
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setMenuOpen(true);
    clearTimeout(timeoutId);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setMenuOpen(false);
    }, 500); // Change the delay time as needed (in milliseconds)
  };

  return (
    <>
    <div className="bg-white">
    <hr className=""></hr>
      <div className="z-50 flex justify-center text-sm cursor-pointer p-1">
        <div onClick={()=>navigate("/")} className="mx-2 p-2 hover:text-[#10847e]">Home</div>
        <div className="relative mx- p-2 hover:text-[#10847e]">
          <span
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={() => handleMouseLeave()}
            className="mr-2 relative"
          >
            Product Categories
          </span>
          <svg
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 h-4 w-4 ${
              menuOpen
                ? "rotate-180 transition-transform duration-500"
                : "transition-transform duration-500"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M10 13l-5-5h10l-5 5z" />
          </svg>
        </div>
        {menuOpen && (
          <div
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={() => setMenuOpen(false)}
            className="z-50 origin-bottom-right absolute mt-10 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-0"
          >
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <a
                onClick={()=>navigate("/products/Opioids")}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Opioids
              </a>
              <a
                onClick={()=>navigate("/products/Psychedelics")}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Psychedelics
              </a>
              <a
                onClick={()=>navigate("/products/Cannabinoids")}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Cannabinoids
              </a>
              <a
                onClick={()=>navigate("/products/Research Chemical")}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Research Chemical
              </a>
              <a
                onClick={()=>navigate("/products/Weight Loss")}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Weight Loss/ diabetes
              </a>
              <a
                onClick={()=>navigate("/products/Gummies and Chocolates")}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Gummies and Chocolates
              </a>
            </div>
          </div>
        )}

        <div className="mx-2 p-2 hover:text-[#10847e] hidden lg:block">How to Order?</div>
        <div className="mx-2 p-2 hover:text-[#10847e] hidden lg:block">FAQs</div>
        <div className="mx-2 p-2 hover:text-[#10847e] hidden lg:block">Testimonials</div>
        <div className="mx-2 p-2 hover:text-[#10847e]">Contact Us</div>
      </div>

      <hr></hr>
      <div className="hero-bg"></div>
    </div>
      
    </>
  );
};
export default Nav;
