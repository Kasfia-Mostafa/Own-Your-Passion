const BrandLogo = ({ productLogo }) => {
  const { brand_name, url } = productLogo || {};

  return (
    <div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        {/* <a href="#"> */}
          <img className="rounded-t-lg" src='https://i.ibb.co/rFYz26T/bangyu-wang-omo-Cm0bv-NW4-unsplash.jpg' alt="" />
        {/* </a> */}
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {brand_name}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default BrandLogo;
