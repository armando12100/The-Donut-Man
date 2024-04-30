
const FeaturedItemsCard = ({name, image}) => {
  return (
    <>
        <div className="justify-center my-3 w-96 shadow-2xl rounded-lg mt-6 lg:mt-0 mx-4 cursor-pointer">
          <div className="flex flex-col justify-center items-center pb-24">
            <h1 className="text-center font-bold pb-4">{name}</h1>
            <img
              src={image}
              alt=""
              width={350}
              className="object-cover h-72 rounded-lg"
            />
          </div>
        </div>
    </>
  )
}

export default FeaturedItemsCard