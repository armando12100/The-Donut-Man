import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const LocationsCard = (props) => {
  return (
    <div className="justify-center my-3 w-80 shadow-2xl rounded-lg lg:w-96 mt-6 lg:mt-0 mx-2 pb-5">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center font-bold py-2">{props.location}</h1>
        <img src={props.image} alt="" width={300} className="object-cover w-72 h-48 rounded-lg" />
        <h1 className="pt-2 font-bold">{props.hours}</h1>
        <Link to={props.maps}>
          <button className="bg-yellow-400 font-bold text-white px-5 py-3 my-2 rounded-md
         hover:bg-pink-300 cursor-pointer hover:text-white transition duration-200">
            Get Directions
          </button>
        </Link>
      </div>
    </div>
  );
};

LocationsCard.propTypes = {
  location: PropTypes.string,
  image: PropTypes.string,
  hours: PropTypes.string,
  maps: PropTypes.string
}

export default LocationsCard;
