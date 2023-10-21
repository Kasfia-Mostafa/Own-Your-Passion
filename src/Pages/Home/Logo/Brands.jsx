import { useLoaderData } from "react-router-dom";
import BrandLogo from "./BrandLogo";

const Brands = () => {

  const brandDetails = useLoaderData()

console.log(brandDetails)

  return (
    <div>
      {
        brandDetails?.map(brandDetail => <BrandLogo
        key={brandDetail._id}
        brandDetail={brandDetail}
        ></BrandLogo>)
      }
    </div>
  );
};

export default Brands;