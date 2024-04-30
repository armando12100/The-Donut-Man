
const FeaturedItemsCard = ({location, image}) => {
  return (
    <>
      <div className="lg:flex lg:flex-row justify-center items-center flex flex-col">
        <div className="justify-center my-3 w-80 shadow-2xl rounded-lg lg:w-96 mt-6 lg:mt-0">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-center font-bold pb-4">{location}</h1>
            <img
              src={image}
              alt=""
              width={300}
              className="object-cover w-72 h-48 rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default FeaturedItemsCard