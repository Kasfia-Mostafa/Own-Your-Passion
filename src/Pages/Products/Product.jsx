import { Link } from "react-router-dom";

const Product = ({ eachProduct }) => {
  const { name, brand, price, category, photo, rating } = eachProduct || {};

  return (
    <div>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="h-60 w-full" src={photo} alt="product image" />
        </a>
        <div className="px-5 pb-5 m-5">
          <div>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
            <p>Brand: {brand}</p>
            <p>Category: {category}</p>
            <p>Rating: {rating}</p>
          </div>
          <div className="flex justify-between">
           <div>
           <span className="text-xl font-bold text-gray-900 dark:text-white">
              ${price}
            </span>

            <Link to="/details">
            <p className="mt-2 font-bold hover:underline">Details</p>
            </Link>

           </div>
           <div>
            <Link to="/updateProduct">
            <p
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Update
            </p>
            </Link>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
