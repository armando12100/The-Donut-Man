import PropTypes from "prop-types";

const DonutCard = (props) => {
  return (
    <>
      <div className="justify-center my-3 w-96 shadow-2xl rounded-lg mt-6 lg:mt-0 mx-4 cursor-pointer">
        <div className="flex flex-col justify-center items-center pb-12">
          <h1 className="text-center font-bold pb-4">{props.name}</h1>
          <img
            src={props.donut}
            alt=""
            width={350}
            className="object-cover h-72 rounded-lg"
          />
        </div>
      </div>
    </>
  );
};

DonutCard.propTypes = {
  name: PropTypes.string,
  donut: PropTypes.image,
};

export default DonutCard;
