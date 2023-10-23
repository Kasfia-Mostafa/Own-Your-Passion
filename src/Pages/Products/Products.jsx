import { useLoaderData } from "react-router-dom";
import Product from "./Product";

const Products = () => {  

const allProducts = useLoaderData();


  return (
    <div className="mt-24 mb-20 font-PlayFair">
      <div className="">
        <div
          id="controls-carousel"
          className="relative w-full"
          data-carousel="static"
        >
          <div className="relative h-56 overflow-hidden md:h-96">
            <div className="duration-700 ease-in-out" data-carousel-item>
              <img
                src="https://i.ibb.co/Q9K4WBg/petri-r-Qsj-Lj-Efhl-Zg-unsplash.jpg"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>

            <div className="duration-700 ease-in-out" data-carousel-item>
              <img
                src="https://i.ibb.co/M1cZLBC/william-thomas-ny6t-O4-It-OEY-unsplash.jpg"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>

            <div className="duration-700 ease-in-out" data-carousel-item>
              <img
                src="https://i.ibb.co/PYNbdqp/ales-nesetril-Im7l-Zjxe-Lhg-unsplash.jpg"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
          </div>
          <button
            type="button"
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-center font-bold text-4xl m-14">All Products</h2>
        <div className="grid grid-cols-2 gap-8">
          {allProducts.map((eachProduct) => (
            <Product key={eachProduct._id} eachProduct={eachProduct}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
