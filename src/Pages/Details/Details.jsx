import { useLoaderData } from "react-router-dom";
import Detail from "./Detail";

const Details = () => {

  const productsDetail = useLoaderData();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {productsDetail?.map((eachProduct) => (
        <Detail key={eachProduct._id} eachProduct={eachProduct}></Detail>
      ))}
    </div>
  );
};

export default Details;
