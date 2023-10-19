const Details = () => {
  return (
    <div className="max-w-max mx-auto mt-40 font-PlayFair">
      <h2 className="text-4xl text-center font-bold m-5">Product Details</h2>
      <div className="flex flex-col items-center bg-white h-[70vh] border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl lg:max-w-6xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src="/docs/images/blog/image-4.jpg"
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <button className="btn btn-ghost">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
