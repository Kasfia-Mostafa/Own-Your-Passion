import { useEffect, useState } from "react";
import BrandLogo from "./BrandLogo";

const Logo = () => {
  const [productsLogo, setProductsLogo] = useState([]);

  useEffect(() => {
    fetch("brandCards.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  console.log('hello')

  return (
    <div>
      <h2>Brands</h2>
      <div className="grid grid-cols-2">
        {productsLogo?.map((productLogo) => (
          <BrandLogo key={productLogo.id} productLogo={productLogo}></BrandLogo>
        ))}
      </div>
    </div>
  );
};

export default Logo;
