import menuPic from "../images/menuPic.jpg"
import DonutData from "../data/MenuData"
import DonutCard from "../components/DonutCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all"


gsap.registerPlugin(ScrollTrigger)

const Menu = () => {

  useGSAP(() => {
    gsap.to("#title", {
      scrollTrigger: {
        scrub: true,
      },
      y: -800,
      ease: "none",
      duration: 1
    });
  }, []);

  const donuts = DonutData.map((donut) => {
    return (
      <DonutCard
        key={donut.key}
        donut={donut.donut}
        name={donut.name}
      />
    );
  });
  return (
    <>
      <div className="justify-center items-center flex flex-col relative">
        <img src={menuPic} alt="" className="object-cover w-full h-96 opacity-95 -z-10" />
        <h1 className="text-7xl font-bold absolute left-10 bottom-6 text-white italic" id="title">Menu</h1>
      </div>

      <div>
        <h1 className="font-bold text-2xl flex justify-center text-center pt-5 pb-10">Fav Items</h1>
      </div>

      <div className="flex-wrap flex justify-center">
        {donuts}
      </div>
    </>
  );
};

export default Menu;
