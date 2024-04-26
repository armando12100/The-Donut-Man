const LocationsCard = ({ location, information, hours, image, key }) => {
  return (
    <div className="justify-center my-3 w-80 shadow-2xl rounded-lg lg:w-96 mt-6 lg:mt-0">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center font-bold pb-4">{location}</h1>
        <img src={image} alt="" width={300} className="object-cover w-72 h-48 rounded-lg" />
        <h1 className="pt-2 font-bold">{hours}</h1>
        <h1 className="pl-2 w-4/6">{information}</h1>
      </div>
    </div>
  );
};

export default LocationsCard;
