import { useState } from "react";
import Swal from "sweetalert2";

const MyCart = ({ cart }) => {
  const { _id, name, brand, price, photo } = cart || {};

  const [noCarts, setNoCarts] = useState(cart)

  const handleDelete = _id => {
    console.log(_id)
    fetch(`http://localhost:5000/cartBrands/${_id}`,{
      method:"DELETE"
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data)
      if(data.deletedCount > 0){
        Swal.fire({
          title: "Cancel!",
          text: "Cancel Product",
          icon: "info",
          confirmButtonText: "Ok",
        });
        const remaining = noCarts.filter(noCart =>
          noCart._id !== _id);
        setNoCarts(remaining)
      }
    })
  }

  return (
    <div>
      <div className="max-w-4xl mx-auto mt-10 mb-20">
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img className="h-60 w-full" src={photo} alt="product image" />

          <div className="px-5 pb-5 m-5">
            <div>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {name}
              </h5>
              <p>Brand: {brand}</p>
            </div>
            <div className="flex justify-between">
              <div>
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  ${price}
                </span>
                <div className="flex mt-2 gap-8">
                  <div>
                  <button className="btn bg-gray-400 w-40 h-10 rounded-md text-white text-xl font-bold">
                    Buy
                  </button>
                </div>
                <div className="flex mt-2">
                  <button onClick={()=> handleDelete(_id)} 
                  className="text-black  font-bold">
                    Delete
                  </button>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
