import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../Product/Product";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/CartSlice";

const ProductByCategory = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://med-server-production.up.railway.app/api/products/all")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 400;
  };

  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 400;
  };

  const dispatch = useDispatch();
  
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  // Create a new array of products with only the first product for each unique category
  const uniqueProducts = Object.values(
    data.reduce((acc, cur) => {
      if (!acc[cur.category]) {
        acc[cur.category] = cur;
      }
      return acc;
    }, {})
  );

  return (
    <>
      <div className="relative">
        <h1 className="pt-2 text-3xl font-semibold">Products</h1>
        <div className="absolute right-0 top-5 ">
          <button onClick={scrollLeft} className="p-2 m-2 rounded-full bg-white">
            <FiChevronLeft />
          </button>
          <button onClick={scrollRight} className="p-2 m-2 rounded-full bg-white">
            <FiChevronRight />
          </button>
        </div>
        <div id="content" className="carousel flex items-center justify-start overflow-x-auto scroll-smooth scrollbar-hide">
          <div className="flex mt-5 justify-center">
            {uniqueProducts.map((product, key) => (
              <Product
                id={product._id}
                key={key}
                imageUrl={product.image}
                title={product.title}
                price={product.price}
                description={product.description}
                discount={product.Discount}
                category={product.category}
                product={product}
                handleAddToCart={()=>handleAddToCart(product)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductByCategory;
