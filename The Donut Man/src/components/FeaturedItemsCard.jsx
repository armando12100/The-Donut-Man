import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const FeaturedItemsCard = (props) => {
  return (
    <>
      <div className="justify-center my-3 w-96 shadow-2xl rounded-lg mt-6 lg:mt-0 mx-4 cursor-pointer pb-6">
        <div className="flex flex-col justify-center items-center
        hover:scale-105 transition duration-200 pt-2">
          <h1 className="text-center font-bold pb-4">{props.name}</h1>
          <img
            src={props.image}
            alt=""
            width={350}
            className="object-cover h-72 rounded-lg"
          />
        </div>
        <div className='flex justify-center'>
          <Link to="/menu">
            <button className="bg-yellow-300 font-bold 
        rounded-3xl py-4 px-12 text-white shadow-xl hover:border-yellow-400 
        cursor-pointer hover:bg-pink-300 transition duration-500 mt-5">See More!</button>
          </Link>
        </div>
      </div>
    </>
  )
}

FeaturedItemsCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string
}

export default FeaturedItemsCard