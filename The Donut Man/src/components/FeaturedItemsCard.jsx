
const FeaturedItemsCard = ({ name, image }) => {
  return (
    <>
      <div className="justify-center my-3 w-96 shadow-2xl rounded-lg mt-6 lg:mt-0 mx-4 cursor-pointer">
        <div className="flex flex-col justify-center items-center pb-12">
          <h1 className="text-center font-bold pb-4">{name}</h1>
          <img
            src={image}
            alt=""
            width={350}
            className="object-cover h-72 rounded-lg"
          />
          <button className="bg-yellow-300 font-bold 
        rounded-3xl py-4 px-12 text-white shadow-xl hover:border-yellow-400 
        cursor-pointer hover:bg-pink-300 transition duration-500 mt-10">Nutrition Info</button>
        </div>
      </div>
    </>
  )
}

export default FeaturedItemsCard