import { useLoaderData } from "react-router-dom";
import MyCart from "./MyCart";

const MyCarts = () => {
  
const carts = useLoaderData()  
console.log(carts)

  return (
    <div>
        <div className="max-w-max mx-auto font-PlayFair mt-40 mb-10">
        <h2 className="text-center font-bold text-4xl m-14">My Cart: {carts.length}</h2>
        <div className="grid grid-cols-2 gap-8">
          {/* {carts.map((cart) => (
            <MyCart key={cart.id} cart={cart}></MyCart>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default MyCarts;