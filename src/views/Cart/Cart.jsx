// import React, { useState } from "react";
// import ProductCart from "../../Components/ProductCart/ProductCart";
// import { useSelector, useDispatch } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   add,
//   decrementQuantity,
//   incrementQuantity,
//   remove,
//   updateQuantity,
// } from "../../store/CartSlice";

// const Cart = () => {
//   const products = useSelector((state) => state.cart);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [standardShippingCost, setStandardShippingCost] = useState(10);
//   const [quantity,setQuantity] = useState(1);
  
//   const increaseQuantity = (product) =>
//   {
//     // setQuantity(quantity+1);
//     dispatch(incrementQuantity(product))
//   }
//   const decreaseQuantity = () =>
//   {
//     if(quantity>1)
//     dispatch(decrementQuantity())
//     // setQuantity(quantity-1);
//   }
 
 

 

//   return (
//     <div className="bg-gray-100 p-2">
//       <div className="container mx-auto mt-2">
//         <div className="flex shadow-md my-10">
//           <div className="w-3/4 bg-white px-10 py-10">
//             <div className="flex justify-between border-b pb-8">
//               <h1 className="font-semibold text-2xl">Shopping Cart</h1>
//               <h2 className="font-semibold text-2xl">{products.length} Items</h2>
//             </div>
//             <div className="flex mt-10 mb-5">
//               <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
//                 Product Details
//               </h3>
//               <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
//                 Quantity
//               </h3>
//               <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
//                 Price
//               </h3>
//               <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
//                 Total
//               </h3>
//             </div>

//             {products&&products.map((item) => (
//               <ProductCart
//                 key={item.id}
//                 image={item.image}
//                 title={item.title}
//                 category={item.category}
//                 price={item.price}
//                 quantity={quantity} 
//                 incrementQuantity={increaseQuantity}
//                 decrementQuantity={decreaseQuantity}// Pass the quantity prop
//                 // Pass the removeProduct prop
//               />
//             ))}

//             <a
//               onClick={() => navigate("/product")}
//               className="flex font-semibold text-indigo-600 text-sm mt-10 cursor-pointer"
//             >
//               <svg
//                 className="fill-current mr-2 text-indigo-600 w-4"
//                 viewBox="0 0 448 512"
//               >
//                 <path
//                   d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"
//                 />
//               </svg>
//               Continue Shopping
//             </a>
//           </div>
//           <div id="summary" className="w-1/4 px-8 py-10">
//             <h1 className="font-semibold text-2xl border-b pb-8">
//               Order Summary
//             </h1>
//             <div className="flex justify-between mt-10 mb-5">
//               <span className="font-semibold text-sm uppercase">
//                 Items {products.length}
//               </span>
//               <span className="font-semibold text-sm">100$</span>
//             </div>
//             <div>
//               <label className="font-medium inline-block mb-3 text-sm uppercase">
//                 Shipping
//               </label>
//               <select className="block p-2 text-gray-600 w-full text-sm">
//                 <option>Standard shipping - ${standardShippingCost}</option>
//               </select>
//             </div>
//             <div className="py-10">
//               <label
//                 htmlFor="promo"
//                 className="font-semibold inline-block mb-3 text-sm uppercase"
//               >
//                 Promo Code
//               </label>
//               <input
//                 type="text"
//                 id="promo"
//                 placeholder="Enter your code"
//                 className="p-2 text-sm w-full"
//               />
//             </div>
//             <button className="rounded-lg bg-[#24c444] hover:bg-[#4b8e30] px-5 py-2 text-sm text-white uppercase">
//               Apply
//             </button>
//             <div className="border-t mt-8">
//               <div className="flex font-semibold justify-between py-6 text-sm uppercase">
//                 <span>Total cost</span>
//                 <span>{100 + standardShippingCost}$</span>
//               </div>
//               <button className="bg-[#10847e] font-semibold hover:bg-[#1d6966] rounded-lg py-3 text-sm text-white uppercase w-full">
//                 Checkout
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    addToCart,
    clearCart,
    decreaseCart,
    getTotals,
    removeFromCart
  } from "../../store/CartSlice";

import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="cart-container">
      <h3>Shopping Cart</h3>
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is currently empty</p>
          <div className="start-shopping">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart-items">
            {cart.cartItems &&
              cart.cartItems.map((cartItem) => (
                <div className="cart-item" key={cartItem.id}>
                  <div className="cart-product">
                    <img src={cartItem.image} alt={cartItem.description} />
                    <div>
                      <h3 className="text-lg text-xl font-extrabold">{cartItem.title}</h3>
                      <p className="text-sm text-slate-600">{cartItem.category}</p>
                      <button onClick={() => handleRemoveFromCart(cartItem)}>
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="cart-product-price">${cartItem.price}</div>
                  <div className="cart-product-quantity">
                    <button onClick={() => handleDecreaseCart(cartItem)}>
                      -
                    </button>
                    <div className="count">{cartItem.cartQuantity}</div>
                    <button onClick={() => handleAddToCart(cartItem)}>+</button>
                  </div>
                  <div className="cart-product-total-price">
                    ${cartItem.price * cartItem.cartQuantity}
                  </div>
                </div>
              ))}
          </div>
          <div className="cart-summary">
            <button className="clear-btn" onClick={() => handleClearCart()}>
              Clear Cart
            </button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">${cart.cartTotalAmount}</span>
              </div>
              <p>Taxes and shipping calculated at checkout</p>
              <button>Check out</button>
              <div className="continue-shopping">
                <Link to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;