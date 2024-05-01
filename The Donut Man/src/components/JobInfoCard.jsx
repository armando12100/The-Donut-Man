import { Link } from "react-router-dom";

const JobInfoCard = ({ key, location, title, description }) => {
  return (
    <div className="flex-col mx-20 py-10 border-b-yellow-400 border-b-2 border-solid">
      <h1 className="font-bold text-xl">{title}</h1>
      <h1 className="font-bold text-md text-yellow-400 italic pb-4">
        {location}
      </h1>
      <p className="italic font-semibold pb-4">{description}</p>
      <Link to={"/application"}>
        <button
          className="bg-yellow-300 font-bold 
        rounded-3xl py-4 px-12 text-white shadow-xl hover:border-yellow-400 
        cursor-pointer hover:bg-pink-300 transition duration-500"
        >
          Apply Now
        </button>
      </Link>
    </div>
  );
};

export default JobInfoCard;
