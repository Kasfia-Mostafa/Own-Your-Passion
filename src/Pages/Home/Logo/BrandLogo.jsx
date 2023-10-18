const BrandLogo = ({ productLogo }) => {
  const { brand_name, url } = productLogo || {};

  return (
    <div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-full shadow dark:bg-gray-800 dark:border-gray-700">
        {/* <a href="#"> */}
          <img className="rounded-lg h-60 w-80" src={url} alt="" />
        {/* </a> */}
        <div className="p-5">
          <h5 className="mb-2 text-xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">
            {brand_name}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default BrandLogo;
