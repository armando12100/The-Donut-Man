const Banner = () => {
  return (
    <div className="flex justify-center relative">
      <div className="bg-yellow-400 w-5/6  flex flex-col justify-center p-3 font-bold rounded-md text-white">
        <h1 className="text-center text-2xl pb-2">Fresh Donuts</h1>
        <p className="px-2 pb-1">
          Newest location located at Grand Central Market. Opened in June 2020,
          our brand new DTLA location is making handmade donuts on site
          everyday!
        </p>
        <p className="text-center pb-2">Open from 8am - 9pm everyday</p>
        <div className="justify-center flex pb-20">
          <button className="bg-white text-yellow-300 font-bold px-5 py-2 hover:bg-pink-300 
          hover:text-white transition duration-200 cursor-pointer my-1 w-1/2 rounded-md">
            Apply Now!
          </button>
        </div>
        <div className="flex justify-center">
          <h1 className="absolute bottom-0 -my-3 bg-white text-4xl font-bold text-black w-3/4 text-center pb-10 pt-3 rounded-xl">
            Locations
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
