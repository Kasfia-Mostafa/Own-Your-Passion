import { useEffect, useState } from "react";
import BrandLogo from "./BrandLogo";

const Logo = () => {
  const [productsLogo, setProductsLogo] = useState([]);

  useEffect(() => {
    fetch("brandCards.json")
      .then((res) => res.json())
      .then((data) => setProductsLogo(data));
  }, []);

  return (
    <div>
      <div className="bg-black m-5 p-10">
        <div className="max-w-5xl mx-auto p-10 font-PlayFair bg-white">
          <h2 className="text-5xl text-center font-bold m-4 text-black">
            Brands
          </h2>
          {
            <div className="grid lg:grid-cols-3 gap-10">
              {productsLogo?.map((productLogo) => (
                <BrandLogo
                  key={productLogo.id}
                  productLogo={productLogo}
                ></BrandLogo>
              ))}
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Logo;
