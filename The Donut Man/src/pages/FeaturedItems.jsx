import FeaturedItemsCard from "../components/FeaturedItemsCard";
import LocationsInfo from "../data/LocationsInfo";

const FeaturedItems = () => {
  const cards = LocationsInfo.map((item) => {
    return (
      <FeaturedItemsCard
        key={item.key}
        location={item.location}
        image={item.image}
      />
    );
  });
  return (
    <div className="lg:flex lg:flex-row justify-center items-center flex flex-col">
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold pb-10">Donut Man Proudly Presents</h1>
      </div>
      {cards}
    </div>
  );
};

export default FeaturedItems;
