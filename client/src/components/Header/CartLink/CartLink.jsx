import React from 'react';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CartLink = () => {
  const productsInCart = useSelector((state) => state.app.cart);

  return (
    <>
      <Link
        to="/cart"
        className="flex-shrink-0 relative h-12 w-12 p-2 rounded-full hover:bg-gray-400 focus-visible:bg-gray-300"
      >
        <svg
          className="w-full h-full dark:fill-white"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 33 33"
        >
          <g>
            <path
              d="M28.313,33H4.688c-0.137,0-0.268-0.056-0.362-0.155c-0.094-0.099-0.144-0.232-0.138-0.369L5.313,8.851
		c0.013-0.267,0.232-0.476,0.5-0.476h21.375c0.267,0,0.487,0.209,0.5,0.476l1.125,23.625c0.006,0.137-0.043,0.27-0.138,0.369
		C28.58,32.944,28.449,33,28.313,33z M5.212,32h22.576L26.711,9.375H6.289L5.212,32z"
            />
            <path
              d="M21.905,11.375c-0.276,0-0.5-0.224-0.5-0.5v-4.97C21.405,3.201,19.205,1,16.5,1s-4.905,2.201-4.905,4.905v4.97
		c0,0.276-0.224,0.5-0.5,0.5s-0.5-0.224-0.5-0.5v-4.97C10.595,2.649,13.244,0,16.5,0s5.905,2.649,5.905,5.905v4.97
		C22.405,11.151,22.182,11.375,21.905,11.375z"
            />
          </g>
        </svg>
        <span className="absolute w-6 dark:text-white top-4 left-3 text-sm flex items-center justify-center font-semibold font-titleFont">
          {productsInCart.length}
        </span>
      </Link>
    </>
  );
};

export default CartLink;
