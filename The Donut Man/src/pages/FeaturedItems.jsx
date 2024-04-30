import FeaturedItemsCard from "../components/FeaturedItemsCard";
import FeaturedDonutInfo from "../data/FeaturedDonutInfo";

const FeaturedItems = () => {
  const cards = FeaturedDonutInfo.map((item) => {
    return (
      <FeaturedItemsCard
        key={item.key}
        name={item.name}
        image={item.image}
      />
    );
  });
  return (
    <div className="justify-center items-center flex flex-col">
      <div className="flex justify-center">
        <h1 className="lg:text-4xl text-3xl font-bold pb-10"> The Donut Man Proudly Presents</h1>
      </div>
      <div className="lg:flex pt-6">
        {cards}
      </div>
      <div className="bg-yellow-400 text-white font-bold w-2/3 px-4 py-4 my-8">
        <p>
          The Donut Man	&#39;s famous fresh Strawberry Donut has been featured on Huell Howser, 
          The Food Network, and The Cooking Channel. Not to mention hundreds of newspapers 
          and online articles. In 2015 it won KCET’s “Most Iconic Dish” in Los Angeles. If strawberries
          aren&#39;t your thing you can enjoy one of our tasty Peach Donut&#39;s.
          </p>
      </div>
    </div>
  );
};

export default FeaturedItems;
