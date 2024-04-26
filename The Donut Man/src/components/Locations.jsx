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
      />
    );
  });

  return <div className="flex justify-center">{cards}</div>;
};

export default Locations;
