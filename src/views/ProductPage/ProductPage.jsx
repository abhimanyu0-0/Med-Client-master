import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../Components/Header/Header";
import { useDispatch } from "react-redux";
import {addToCart} from "../../store/CartSlice";
const ProductPage = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [data, setData] = useState([]);
  const {id} = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  useEffect(() => {
    axios
      .get(`https://med-server-production.up.railway.app/api/products/${id}`)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
      <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
        <img
          className="w-full"
          alt="pic of a medicine"
          src={data.image} />
        <img
          className="mt-6 w-full"
          alt="pic of a medicine"
          src={data.image} />
      </div>
      <div className="md:hidden">
        <img
          className="w-full"
          alt="pic of a medicine"
          src={data.image}
        />
        <div className="flex items-center justify-between mt-3 space-x-4 md:space-x-0">
          <img
            alt="img-tag-one"
            className="md:w-48 md:h-48 w-full"
            src={data.image}
          />
          <img
            alt="img-tag-one"
            className="md:w-48 md:h-48 w-full"
            src={data.image}
          />
          <img
            alt="img-tag-one"
            className="md:w-48 md:h-48 w-full"
            src={data.image}
          />
          <img
            alt="img-tag-one"
            className="md:w-48 md:h-48 w-full"
            src={data.image}
          />
        </div>
      </div>
      <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
        <div className="border-b border-gray-200 pb-6">
          <p className="text-sm leading-none text-gray-600">
            Category - {data.category}
          </p>
          <h1
            className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-2
						"
          >
            {data.title}
          </h1>
        </div>
        <div className="py-4 border-b border-gray-200 flex items-center justify-between">
          <p className="text-base leading-4 text-gray-800">Price</p>
          <div className="flex items-center justify-center text-lg">${data.price}</div>
        </div>
        <div className="py-4 border-b border-gray-200 flex items-center justify-between">
          <p className="text-base leading-4 text-gray-800">Weight (in gms)</p>
          <div className="flex items-center justify-center">
            <p className="text-sm leading-none text-gray-600 mr-3">5</p>
            <svg
              className="cursor-pointer"
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L5 5L1 9"
                stroke="#4B5563"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <button
          className="
						focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#10847e]
						text-base
						flex
						items-center
						justify-center
						leading-none
						text-white
						bg-[#10847e]
						w-full
						py-4
						hover:bg-[#256c68]
                        
					"
          onClick={()=>{navigate("/cart"); handleAddToCart(data)}}
        >
          Add to Cart
        </button>
        <div>
          <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 mt-7">
            {/* Hydrocodone/paracetamol is the combination of the pain medications
            hydrocodone and paracetamol. It is used to treat moderate to severe
            pain. It is taken by mouth. Recreational use is common in the United
            States. Common side effects include dizziness, sleepiness,
            constipation, and vomiting. */}
            {data.description}
          </p>
          <p className="text-base leading-4 mt-7 text-gray-600">
            Product Code: 8BN321AF2IF0NYA
          </p>
           <p className="text-base leading-4 mt-4 text-gray-600">
            All our products are certified and safe for consumption
          </p>
          {/* <p className="text-base leading-4 mt-4 text-gray-600">
            Height: 10 inches
          </p>
          <p className="text-base leading-4 mt-4 text-gray-600">
            Depth: 5.1 inches
          </p> */} 
          {/* <p className="md:w-96 text-base leading-normal text-gray-600 mt-4">
            Composition: 100% calf leather, inside: 100% lamb leather
          </p> */}
        </div>
        <div>
          <div className="border-t border-b py-4 mt-7 border-gray-200">
            <div
              onClick={() => setShow(!show)}
              className="flex justify-between items-center cursor-pointer"
            >
              <p className="text-base leading-4 text-gray-800">
                Shipping and returns
              </p>
              <button
                className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                aria-label="show or hide"
              >
                <svg
                  className={"transform " + (show ? "rotate-180" : "rotate-0")}
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 1L5 5L1 1"
                    stroke="#4B5563"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div
              className={
                "pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " +
                (show ? "block" : "hidden")
              }
              id="sect"
            >
              You will be responsible for paying for your own shipping costs for
              returning your item. Shipping costs are nonrefundable
            </div>
          </div>
        </div>
        <div>
          <div className="border-b py-4 border-gray-200">
            <div
              onClick={() => setShow2(!show2)}
              className="flex justify-between items-center cursor-pointer"
            >
              <p className="text-base leading-4 text-gray-800">Contact us</p>
              <button
                className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                aria-label="show or hide"
              >
                <svg
                  className={"transform " + (show2 ? "rotate-180" : "rotate-0")}
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 1L5 5L1 1"
                    stroke="#4B5563"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div
              className={
                "pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " +
                (show2 ? "block" : "hidden")
              }
              id="sect"
            >
              If you have any questions on how to return your item to us,
              contact us.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
