import workerPic from "../images/workerPic.webp"
import JobInfo from "../data/JobInfo"
import JobInfoCard from "../components/JobInfoCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all"


gsap.registerPlugin(ScrollTrigger)


const Careers = () => {

  useGSAP(() => {
    gsap.to("#title", {
      scrollTrigger: {
        trigger: "trigger",
        scrub: true,
        markers: true
      },
      y: -800,
      ease: "none",
      duration: 1
    });
  }, []);

  const jobs = JobInfo.map((item) => {
    return (
      <JobInfoCard
        key={item.key}
        location={item.location}
        title={item.title}
        description={item.description}
      />
    );
  });
  return (
    <>
      <div className="justify-center items-center flex flex-col relative">
        <img src={workerPic} alt="" className="object-cover w-full h-96 opacity-95 -z-10" />
        <h1 className="text-7xl font-bold absolute left-10 bottom-6 text-white italic" id="title">Careers</h1>
      </div>
      <div className="flex text-center flex-col pt-5">
        <h1 className="font-bold text-4xl">Explore opportunities near you</h1>
      </div>
      <div>
        {jobs}
      </div>
    </>
  )
}

export default Careers