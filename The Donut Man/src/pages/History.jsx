import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Fosters from "../images/fostersdonuts.jpg"
import strawberrydonut from "../images/strawberrydonut.jpg"
import glendora from "../images/glendora.jpg"
import HistoryPic from "../images/history.webp"
import { ScrollTrigger } from "gsap/all"


gsap.registerPlugin(ScrollTrigger)

const History = () => {

  useGSAP(() => {
    gsap.to("#title", {
      scrollTrigger: {
        scrub: true,
      },
      y: -300,
      ease: "none",
      duration: 1
    });
  }, []);

  return (
    <>
      <div className="justify-center items-center flex flex-col relative">
        <img
          src={HistoryPic}
          alt=""
          className="object-cover w-full h-96 opacity-95 -z-10"
        />
        <h1 className="text-7xl font-bold absolute left-10 bottom-6 text-white italic" id="title">
          History
        </h1>
      </div>

      <div className="flex justify-center">
        <div className="justify-center w-11/12 shadow-xl lg:flex">
          <div className="flex text-center items-center justify-center lg:w-1/2">
            <p className="px-8 font-bold py-3">
              Opened in 1972, The Donut Man has become not just a culinary icon, but a cultural
              example of the American Dream. Jim and Miyoko Nakano opened the donut shop in May of
              1972 seeking to achieve their dreams through entrepreneurship. Originally the donut
              shop was part of a franchise and named Foster’s Donuts. It wasn’t until the mid 80’s
              when Jim became independent and The Donut Man was born. Jim recalls sitting at dinner
              with some friends discussing his need to choose a new name for the newly independent
              donut shop. As they were getting up to leave, a little girl said “Look, it’s the donut
              man!” At that moment Jim became The Donut Man.
            </p>
          </div>

          <div id="trigger"></div>

          <div className="flex align-middle items-center justify-center">
            <img src={Fosters} alt="" width={400} className="h-5/6 rounded-lg pb-10" id="image" />
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <div className="justify-center w-11/12 shadow-xl lg:flex">
          <div className="flex text-center items-center justify-center lg:w-1/2">
            <p className="px-8 font-bold py-3">
              The Donut Man is best know if it’s iconic fresh fruit donuts, especially the Fresh
              Strawberry Donut. The Strawberry Donut has been featured in countless times in local
              and national media. Most recently on the “Today” show and Food Network’s “The Best
              thing I Ever Ate”. Jim developed the strawberry donut from an over abundant strawberry
              crop one year. The San Gabriel Valley and more specifically the greater Glendora area
              was surrounded by strawberry farms. While picking up a donut one morning, a local
              farmer mentioned that he had plenty of strawberries and that Jim should come up with
              a way to use them. It took Jim a while to perfect what we now know as the Strawberry
              Donut. He says the key was finding the right balance of sweetness, due to how sweet
              all the components can be. It became an instant success and the customers fell in
              love with it.
            </p>
          </div>

          <div className="flex align-middle items-center justify-center">
            <img src={strawberrydonut} alt="" width={400} className="h-5/6 rounded-lg pb-10" />
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <div className="justify-center w-11/12 shadow-xl lg:flex">
          <div className="flex text-center items-center justify-center lg:w-1/2">
            <p className="px-8 font-bold py-3">
              The Donut Man today looks much like it did in 1972. Every donut is made by hand, on
              site, and every day. The same process, ingredients, and standards that made this small
              town donut shop so popular. This can be seen in the unique shape that every donut takes,
              proving that is was made by hand. Jim says his success has come from being hard headed
              in that he will not compromise on quality and customer service. You can come by and
              watch through the window for yourself. Every donut is cut, shaped, fried, and frosted
              in front of the customer.
            </p>
          </div>

          <div className="flex align-middle items-center justify-center">
            <img src={glendora} alt="" width={400} className="h-5/6 rounded-lg pb-10" />
          </div>
        </div>
      </div>

    </>
  )
}

export default History