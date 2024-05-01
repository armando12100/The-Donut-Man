import workerPic from "../images/workerPic.webp"
import JobInfo from "../data/JobInfo"
import JobInfoCard from "../components/JobInfoCard";

const Careers = () => {
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
        <h1 className="text-7xl font-bold absolute left-10 bottom-6 text-white italic">Careers</h1>
      </div>
      <div className="flex text-center flex-col pt-5">
        <h1 className="font-bold text-4xl">Explore opportunities near you</h1>
        {/* <p>Here at The Donut Man, we are always looking for motivated self-starting people to 
          join our team. We have various positions available and offer flexible scheduling, full 
          and part-time positions, and holidays off. You can read and submit your resume online 
          by following the links below or download the application below and bring it by the shop 
          and introduce yourself.</p> */}
      </div>
      <div>
        {jobs}
      </div>
    </>
  )
}

export default Careers