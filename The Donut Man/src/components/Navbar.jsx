import { NavLink } from "react-router-dom";
import DonutManLogo from "../images/logo.gif";

const Navbar = () => {

  const style = ({ isActive }) => [
    "px-2 py-2.5",
    "hover:bg-cprimary-300 hover:text-csecond-100",
    "rounded-md transition",
    isActive ? "bg-amber-200 text-white font-bold": "hover:underline font-bold"
  ].join(" ")

  return (
    <div>
      <div className="flex justify-around py-3 items-center">
        <NavLink to={"/"}>
          <img src={DonutManLogo} alt="logo" width={200} height={200} />
        </NavLink>
        <NavLink to={"/seasonal"} className={style}>
          What&#39;s In Season
        </NavLink>
        <NavLink to={"/market"} className={style}>Grand Central Market</NavLink>
        <NavLink to={"/menu"} className={style}>Photo Menu</NavLink>
        <NavLink to={"/news"} className={style}>News</NavLink>
        <NavLink to={"/history"} className={style}>History</NavLink>
        <NavLink to={"/careers"} className={style}>Careers</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
