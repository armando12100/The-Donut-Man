import HeroPic from "../images/heropic.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all"


gsap.registerPlugin(ScrollTrigger)

const Hero = () => {

  useGSAP(() => {
    gsap.to("#title", {
      scrollTrigger: {
        trigger: "trigger",
        scrub: true,
      },
      y: -125,
      ease: "none",
      duration: 1
    });
  }, []);

  return (
    <div className="justify-center items-center flex flex-col relative mb-10">
      <img src={HeroPic} alt="" className="object-cover h-102 w-full"/>
      <h1 className="text-7xl font-bold absolute left-10 bottom-6 text-white italic" id="title">
        The Donut Man
      </h1>
    </div>
  );
};

export default Hero;
