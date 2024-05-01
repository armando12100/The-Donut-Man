// import DonutManHeroPic from "../images/donutmanhero.jpg"
import HeroPic from "../images/heropic.jpg";

const Hero = () => {
  return (
    <div className="justify-center items-center flex flex-col relative">
      <img src={HeroPic} alt="" className="object-cover h-102 w-full"/>
      <h1 className="text-7xl font-bold absolute left-10 bottom-6 text-white italic">
        The Donut Man
      </h1>
    </div>
  );
};

export default Hero;
