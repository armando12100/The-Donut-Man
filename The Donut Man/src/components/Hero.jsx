// import DonutManHeroPic from "../images/donutmanhero.jpg"
import HeroPic from "../images/heropic.jpg"

const Hero = () => {
  return (
    <div className="flex justify-center bg-yellow-50 h-screen">
      <img src={HeroPic} alt="" className="rounded-lg w-full"/>
    </div>
  )
}

export default Hero