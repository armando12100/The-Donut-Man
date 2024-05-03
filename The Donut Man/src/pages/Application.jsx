import { useState } from "react";
import checkmark from "../images/checkmark.png"
import { useNavigate } from 'react-router-dom'

const Application = () => {

  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate()

  function toggleSubmit() {
    setIsSubmit((true));
    console.log(isSubmit);

    setTimeout(() => {
      setIsSubmit(false);
      navigate('/')
    }, 2000);
  }

  function toggleAnywhere() {
    if (isSubmit === true) {
      console.log(isSubmit);
      setIsSubmit((prev) => !prev);
    }
  }

  return (
    <>
      <div className="flex justify-center pb-12 mt-8 relative">
        {isSubmit ?
          <div className="absolute top-24 bg-white shadow-2xl py-24 px-20 rounded-xl transition duration-200 ease-in-out flex-col
          justify-center align-middle text-center" onClick={toggleAnywhere}>
            <div className="flex justify-center">
              <img src={checkmark} alt="" />
            </div>
            <h1 className="font-bold text-3xl pb-3">Thank You</h1>
            <p className="font-semibold italic">The form was submitted successfully.</p>
          </div> :
          <div></div>}
        <form
          action=""
          className="flex-col items-center text-center justify-center rounded-2xl
          bg-gradient-to-br from-yellow-300 to-pink-300 w-10/12 flex-wrap "
          onSubmit={e => e.preventDefault()}
        >
          <div>
            <h1 className="text-5xl font-bold text-white pt-3">Apply Today!</h1>
          </div>

          <div className="flex justify-center py-10">
            <div className="flex-col text-right">
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

            <div className="flex-col text-right pl-10">
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
          <button
            className="bg-yellow-300 font-bold 
        rounded-3xl py-4 px-20 text-white shadow-xl hover:border-yellow-400 
        cursor-pointer hover:bg-pink-300 transition duration-500 mb-10"
            onClick={toggleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Application;
