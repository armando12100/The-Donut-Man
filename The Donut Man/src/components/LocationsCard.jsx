const LocationsCard = ({ location, hours, image,}) => {
  return (
    <div className="justify-center my-3 w-80 shadow-2xl rounded-lg lg:w-96 mt-6 lg:mt-0 mx-2">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center font-bold py-2">{location}</h1>
        <img src={image} alt="" width={300} className="object-cover w-72 h-48 rounded-lg" />
        <h1 className="pt-2 font-bold">{hours}</h1>
        <button className="bg-yellow-400 font-bold text-white px-5 py-3 my-2 hover:bg-white cursor-pointer hover:text-yellow-400">Get Directions</button>
        {/* <h1 className="pl-2 w-4/6">{information}</h1> */}
      </div>
    </div>
  );
};

export default LocationsCard;
