import { NavLink } from "react-router-dom";
import DonutManLogo from "../images/logo.gif";
import { useState } from "react";
import Hamburger from "../images/hamburger.png";

const Navbar = () => {
  const style = ({ isActive }) =>
    [
      "px-2 py-2.5",
      "hover:bg-cprimary-300 hover:text-csecond-100",
      "rounded-md transition",
      isActive
        ? "bg-amber-200 text-white font-bold transition ease-in duration-500 h-12"
        : "hover:underline font-bold",
    ].join(" ");

  const [isMobile, setIsMobile] = useState(false);

  function toggleMenu() {
    if (isMobile === false) {
      setIsMobile((isMobile) => !isMobile);
    } else {
      setIsMobile(true);
    }
  }

  function toggleAnywhere() {
    if (isMobile === true) {
      setIsMobile((open) => !open);
    }
  }

  return (
    <>
      <div
        className="justify-around py-3 items-center hidden md:flex"
        onClick={toggleAnywhere}
      >
        <NavLink to={"/"}>
          <img src={DonutManLogo} alt="logo" width={200} height={200} />
        </NavLink>
        <NavLink to={"/seasonal"} className={style}>
          What&#39;s In Season
        </NavLink>
        <NavLink to={"/market"} className={style}>
          Grand Central Market
        </NavLink>
        <NavLink to={"/menu"} className={style}>
          Photo Menu
        </NavLink>
        <NavLink to={"/news"} className={style}>
          News
        </NavLink>
        <NavLink to={"/history"} className={style}>
          History
        </NavLink>
        <NavLink to={"/careers"} className={style}>
          Careers
        </NavLink>
      </div>

      <div className="justify-between py-3 items-center px-2 flex md:hidden ">
        <NavLink to={"/"}>
          <img src={DonutManLogo} alt="logo" width={150} height={150} />
        </NavLink>
        <img src={Hamburger} alt="" width={40} height={40}/>
      </div>
    </>
  );
};

export default Navbar;
