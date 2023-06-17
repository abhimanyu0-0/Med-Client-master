import React, { useState, useEffect } from "react";
import Category from "../Category/Category";
import { useNavigate } from "react-router-dom";

const Product = ({
  id,
  imageUrl,
  title,
  description,
  price,
  discount,
  category,
  product,
  handleAddToCart,
}) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const cartTextChange = () => {
    setIsAddedToCart(true);
  };

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 0);

    // Clean up timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  const handleAddToCartClick = () => {
    handleAddToCart(product);
    cartTextChange();
  };

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  if (loading) {
    // Render skeleton loader while data is being fetched
    return (
      <div className="w-52 m-7 bg-gray-200 rounded-lg p-4 animate-pulse">
        <div className="w-full h-36 bg-gray-100"></div>
        <div className="mt-4 space-y-2">
          <div className="h-4 bg-gray-100"></div>
          <div className="h-4 bg-gray-100 w-2/3"></div>
          <div className="h-4 bg-gray-100 w-1/3"></div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="cursor-pointer w-52 m-7 bg-white rounded-lg overflow-hidden 
    shadow-md transition duration-300 ease-in-out hover:shadow-xl hover:scale-105"
    >
      <img
        className="w-full h-36 object-cover border-b border-gray-200 hover:opacity-90 transition-opacity"
        src={imageUrl}
        alt={description}
        onClick={handleClick}
      />
      <div className="p-2">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-xs float-right text-gray-400">({category})</p>
        <div className="flex mt-2">
          <div>
            <p className="font-medium text-2xl">${price}</p>
          </div>
          <div className="text-[#f47779] mt-2 ml-2 text-sm whitespace-nowrap">
            {discount}% OFF
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <button
            onClick={handleAddToCartClick}
            className="text-sm bg-[#10847e] text-white py-2 px-4 rounded hover:bg-[#1c706c] transition duration-300 ease-in-out"
            disabled={isAddedToCart}
          >
            {isAddedToCart ? "Added to cart" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
