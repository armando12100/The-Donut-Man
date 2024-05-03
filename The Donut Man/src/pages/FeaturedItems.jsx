import FeaturedItemsCard from "../components/FeaturedItemsCard";
import FeaturedDonutInfo from "../data/FeaturedDonutInfo";
import SpecialDonuts from "../images/specialty.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all"


gsap.registerPlugin(ScrollTrigger)


const FeaturedItems = () => {

  useGSAP(() => {
    gsap.to("#title", {
      scrollTrigger: {
        trigger: "trigger",
        scrub: true,
      },
      y: -100,
      ease: "none",
      duration: 1
    });
  }, []);


  const cards = FeaturedDonutInfo.map((item) => {
    return (
      <FeaturedItemsCard key={item.key} name={item.name} image={item.image} />
    );
  });
  return (
    <>
      <div className="justify-center items-center flex flex-col relative">
        <img
          src={SpecialDonuts}
          alt=""
          className="object-cover w-full h-96 opacity-95 -z-10"
        />
        <h1 className="text-7xl font-bold absolute left-10 bottom-6 text-white italic" id="title">
          Featured Items
        </h1>
      </div>

      <div className="justify-center items-center flex flex-col">
        <div className="lg:flex pt-6">{cards}</div>
        <div className="bg-yellow-400 text-white font-bold w-2/3 px-4 py-4 my-8">
          <p>
            The Donut Man &#39;s famous fresh Strawberry Donut has been featured
            on Huell Howser, The Food Network, and The Cooking Channel. Not to
            mention hundreds of newspapers and online articles. In 2015 it won
            KCET’s “Most Iconic Dish” in Los Angeles. If strawberries aren&#39;t
            your thing you can enjoy one of our tasty Peach Donut&#39;s.
          </p>
        </div>
      </div>
    </>
  );
};

export default FeaturedItems;
