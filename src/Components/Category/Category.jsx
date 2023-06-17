import React from "react";
import yellowCard from "../../assets/Category/Yellow.svg";
import Blue from "../../assets/Category/Blue.svg";
import Chocolate from "../../assets/Category/Chocolate.svg";
import Green from "../../assets/Category/Green.svg";
import Grey from "../../assets/Category/Grey.svg";
import Pink from "../../assets/Category/Pink.svg";
import { useNavigate } from "react-router-dom";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const CategoryList = () => {
  const navigate = useNavigate();

  const scrollLeft = () => {
    document.getElementById("category1").scrollLeft -= 400;
  };

  const scrollRight = () => {
    document.getElementById("category1").scrollLeft += 400;
  };

  return (
    <div className="cursor-pointer relative">
      <h1 className="font-semibold text-xl lg:text-3xl">Categories</h1>
      <div className="absolute right-0 top-5">
        <button onClick={scrollLeft} className="p-2 m-2 rounded-full bg-white">
          <FiChevronLeft />
        </button>
        <button onClick={scrollRight} className="p-2 m-2 rounded-full bg-white">
          <FiChevronRight />
        </button>
      </div>
      <div
        id="category1"
        className="flex carousel p-6 mt-5 justify-start overflow-x-auto scroll-smooth scrollbar-hide"
      >
        <div onClick={() => navigate("/products/Opioids")} className="flex flex-col items-center">
          <img
            className="w-16 transition-transform duration-300 hover:scale-105 lg:w-44 lg:mx-20"
            src={yellowCard}
            alt="medicine"
          />
          <p className="mt-2 text-center text-sm lg:text-base overflow-hidden">
            Opioids
          </p>
        </div>
        <div onClick={() => navigate("/products/Psychedelics")} className="flex flex-col items-center">
          <img
            className="w-16 transition-transform duration-300 hover:scale-105 lg:w-44 lg:mx-20"
            src={Pink}
            alt="medicine"
          />
          <p className="mt-2 text-center text-sm lg:text-base overflow-hidden">
            Psychedelics
          </p>
        </div>
        <div onClick={() => navigate("/products/Cannabinoids")} className="flex flex-col items-center">
          <img
            className="w-16 transition-transform duration-300 hover:scale-105 lg:w-44 lg:mx-20"
            src={Grey}
            alt="medicine"
          />
          <p className="mt-2 text-center text-sm lg:text-base overflow-hidden">
            Cannabinoids
          </p>
        </div>
        <div onClick={() => navigate("/products/Research Chemical")} className="flex flex-col items-center">
          <img
            className="w-16 transition-transform duration-300 hover:scale-105 lg:w-44 lg:mx-20"
            src={Blue}
            alt="medicine"
          />
          <p className="mt-2 text-center text-sm lg:text-base overflow-hidden">
            Research Chemical
          </p>
        </div>
        <div onClick={() => navigate("/products/Weight Loss")} className="flex flex-col items-center">
          <img
            className="w-16 transition-transform duration-300 hover:scale-105 lg:w-44 lg:mx-20"
            src={Green}
            alt="medicine"
          />
          <p className="mt-2 text-center text-sm lg:text-base overflow-hidden">
            Weight Loss/Diabetes
          </p>
        </div>
        <div onClick={() => navigate("/products/Gummies and Chocolates")} className="flex flex-col items-center">
          <img
            className="w-16 transition-transform duration-300 hover:scale-105 lg:w-44 lg:mx-20"
            src={Chocolate}
            alt="medicine"
          />
          <p className="mt-2 text-center text-sm lg:text-base overflow-hidden">
            Gummies and Chocolates
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
