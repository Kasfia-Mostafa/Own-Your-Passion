import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div className="m-40">
        <div>
          <h2 className="text-4xl font-semibold text-center h-[20vh] flex justify-center items-center">
            Oops!
            <br />
            No data found
          </h2>
          <div className=" flex justify-center items-center mt-10 md:mt-0 lg:mt-0">
            <Link to="/">
              <button className="btn btn-error text-white">Go Home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;