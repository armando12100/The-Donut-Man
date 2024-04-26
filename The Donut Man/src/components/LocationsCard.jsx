const LocationsCard = ({ location, information, hours, image, key }) => {
  return (
    <div className="justify-center my-3 w-96">
      <div className="">
        <h1 className="text-center font-bold pb-4">{location}</h1>
        <img src={image} alt="" width={300} />
        <h1>{hours}</h1>
        <h1>{information}</h1>
      </div>
    </div>
  );
};

export default LocationsCard;
