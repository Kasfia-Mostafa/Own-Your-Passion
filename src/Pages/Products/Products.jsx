import { useLoaderData } from "react-router-dom";
import Product from "./Product";

const Products = () => {

  const allProducts = useLoaderData()

  return (
    <div className="max-w-4xl mx-auto mt-40 mb-20 font-PlayFair">
    <div className="grid grid-cols-2 gap-8">
    {
        allProducts.map(eachProduct => <Product
        key={eachProduct._id}
        eachProduct={eachProduct}
        ></Product>)
      }
    </div>
    </div>
  );
};

export default Products;