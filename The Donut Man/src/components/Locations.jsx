import LocationsInfo from "../data/LocationsInfo";
import LocationsCard from "./LocationsCard";

const Locations = () => {
  const cards = LocationsInfo.map((item) => {
    return (
      <LocationsCard
        key={item.key}
        location={item.location}
        hours={item.hours}
        image={item.image}
        information={item.information}
        maps={item.maps}
      />
    );
  });

  return <div className="lg:flex lg:flex-row justify-center items-center flex flex-col">{cards}</div>;
};

export default Locations;
