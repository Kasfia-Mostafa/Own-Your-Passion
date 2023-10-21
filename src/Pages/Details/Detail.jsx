// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Detail = ({ eachProduct }) => {
  const {_id, name, brand, price, photo, rating, description,category } =
    eachProduct || {};

  const handleCart = () => {
    const newProducts = {
      name,
      brand,
      price,
      category,
      photo,
      rating,
      description,
    };

    console.log(newProducts);

    // send data to sever
    fetch("http://localhost:5000/cartBrand", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProducts),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
       
      });
  };

  return (
    <div>
      <div className="max-w-max mx-auto mt-40 font-PlayFair">
        <h2 className="text-4xl text-center font-bold m-5">Product Details</h2>
        <div className="flex flex-col items-center bg-white p-20 h-[70vh] border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl lg:max-w-6xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={photo}
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
            <p className="mb-3 font-semibold text-black-700 dark:text-gray-400">
              {brand}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Price:
              {price}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Rating:
              {rating}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {description}
            </p>
            <div>
              <Link to={`/myCarts/${_id}`}>
                <button
                  onClick={handleCart}
                  className="btn bg-slate-400 w-40 p-1 rounded-md text-white "
                >
                  Add to cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
