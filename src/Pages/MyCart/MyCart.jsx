import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const MyCart = ({cart}) => {
  const { name, brand, price, photo } = cart || {};


  return (
    <div>
      <div className="max-w-4xl mx-auto mt-40">
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          
            <img className="h-60 w-full" src={photo} alt="product image" />
        
          <div className="px-5 pb-5 m-5">
            <div>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {name}
              </h5>
              <p>Brand: {brand}</p>
            </div>
            <div className="flex justify-between">
              <div>
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  ${price}
                </span>        
<div className="flex mt-2">
<button className="btn bg-gray-400 w-40 h-10 rounded-md text-white text-xl font-bold">Buy</button>

</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
