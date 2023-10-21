import { Link, useLoaderData } from "react-router-dom";

const BrandLogo = ({ productLogo }) => {
  const { brand_name, url } = productLogo || {};


  const brand = useLoaderData();

console.log(brand)
  return (
    <div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-full shadow dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-lg h-60 w-80" src={url} alt="" />
        <div className="p-5">
          <Link to='/productShow'>
            <h5 className="mb-2 text-xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">
              {brand_name}
            </h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BrandLogo;
