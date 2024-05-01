// import DonutManHeroPic from "../images/donutmanhero.jpg"
import HeroPic from "../images/heropic.jpg"

const Hero = () => {
  return (
    <div className="flex justify-center pb-10">
      <img src={HeroPic} alt="" className="rounded-lg w-full md:h-102 xl:h-full"/>
    </div>
  )
}

export default Hero