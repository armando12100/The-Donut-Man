const Application = () => {
  return (
    <>
      <div className="flex justify-center pb-12 mt-8">
        <form
          action=""
          className="flex-col items-center text-center justify-center rounded-2xl
          bg-gradient-to-br from-yellow-300 to-pink-300 w-10/12 flex-wrap "
        >
          <div>
            <h1 className="text-5xl font-bold text-white pt-3">Apply Today!</h1>
          </div>

          <div className="flex">
            <div className="flex-col">
              <div className="py-4">
                <label className="label">First Name:</label>
                <input type="text" name="name" className="input" />
              </div>

              <div className="py-4">
                <label className="label">Address:</label>
                <input type="text" name="name" className="input" />
              </div>

              <div className="py-4">
                <label className="label">City:</label>
                <input type="text" name="name" className="input" />
              </div>

              <div className="py-4">
                <label className="label">Phone:</label>
                <input type="text" name="name" className="input" />
              </div>
            </div>

            <div className="flex-col">
              <div className="py-4">
                <label className="label">Last Name:</label>
                <input type="text" name="name" className="input" />
              </div>

              <div className="py-4">
                <label className="label">Zip Code:</label>
                <input type="text" name="name" className="input" />
              </div>

              <div className="py-4">
                <label className="label">State:</label>
                <input type="text" name="name" className="input" />
              </div>

              <div className="py-4">
                <label className="label">Email:</label>
                <input type="text" name="name" className="input" />
              </div>
            </div>
          </div>

          {/* <div className="flex-col">
              <div className="flex items-center justify-center my-10">
                <label className="label">Last Name:</label>
                <input type="text" name="name" className="input" />

                <label className="label">Apartment/Unit #:</label>
                <input type="text" name="name" className="input" />

                <label className="label">State:</label>
                <input type="text" name="name" className="input" />

                <label className="label">Zip Code:</label>
                <input type="text" name="name" className="input" />

                <label className="label">Email:</label>
                <input type="text" name="name" className="input" />
              </div>
            </div> */}
          <button
            className="bg-yellow-300 font-bold 
        rounded-3xl py-4 px-20 text-white shadow-xl hover:border-yellow-400 
        cursor-pointer hover:bg-pink-300 transition duration-500 mb-10"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Application;
