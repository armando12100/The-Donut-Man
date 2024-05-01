import gcmHeroPic from "../images/gcmHeroPic.jpeg"
import gcmParagraphPic from "../images/gcmParagraphPic.jpg"

const About = () => {
  return (
    <>
      <div className="justify-center items-center flex flex-col relative">
        <img src={gcmHeroPic} alt="" className="w-full opacity-95" />
        <h1 className="text-9xl font-bold pb-8 absolute text-white left-10 bottom-0 italic">About Us</h1>
      </div>

      <div className="flex justify-center mt-20">
        <div className="justify-center w-11/12 shadow-xl lg:flex">
          <div className="flex align-middle items-center justify-center">
            <img src={gcmParagraphPic} alt="" className="h-5/6 rounded-lg pb-10" />
          </div>
          <div className="flex text-center items-center justify-center lg:w-1/2">
            <p className="font-semibold px-6 py-4">After 48 years of serving the best donuts we’ve decided it’s time to expand. March 2020, The Donut Man will be in downtown Los Angeles at the Historic Grand Central Market. We will be making every donut by hand on site. The first question everyone asks us is “Why now?” Then the second is “Why Grand Central Market?” Both answers go hand in hand, because the why is the where. The Donut Man on Route 66 in Glendora is so special. It’s history is rich and deep in the area and we wanted to keep that historical feel. Anyone can build a state of the art kitchen and put a name on it, but very few have the privilege to be a part of such a historical landmark that is Grand Central Market. Our invitation to grow in the historic downtown district of Los Angeles is not only a testament to our donuts, but what we stand for. Our goal is to bring not just delicious donuts to the area, but a culture of giving back to the community and building team members who grow and learn from their experiences with us.</p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-400 text-white font-bold py-6 px-10 flex justify-center">
        <p>Step into your local The Donut Man and sweeten up your day.</p>
      </div>
    </>
  )
}

export default About