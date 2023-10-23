import { useLoaderData } from "react-router-dom";
import BrandLogo from "./BrandLogo";
import { useEffect, useState } from "react";

const Brands = () => {
 
  const [models, setModels] = useState([])
  const [filterBrands, setFilterBrand] = useState([])

useEffect(()=>{
  fetch(`https://own-your-passion-server.vercel.app/products`)
  .then(res => res.json())
  .then(data => setModels(data))
},[])

const brandDetails = useLoaderData();

useEffect(()=>{
  const specificBrand = models.map(model => model.brandName)
  const filterBrand = brandDetails.filter(productB => productB.brand === specificBrand)

  setFilterBrand(filterBrand)

},[brandDetails, models])
console.log(filterBrands)

  return (
    <div>
      {filterBrands?.map((brandDetail) => (
        <BrandLogo key={brandDetail._id} brandDetail={brandDetail}></BrandLogo>
      ))}
    </div>
  );
};

export default Brands;
