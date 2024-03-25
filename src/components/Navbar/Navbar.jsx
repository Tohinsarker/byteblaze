import { CgProfile } from "react-icons/cg";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import './Navbar.css';

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("themes") || "light");
  const [sw, setSwitch] = useState(localStorage.getItem("switch") || false);
  const themeId = document.getElementById("themeId");

  useEffect(() => {
    localStorage.setItem("themes", theme);
    document.documentElement.setAttribute("data-theme", theme);

    localStorage.setItem("switch", sw);

    document.getElementById("themeId").innerText = sw ? "LIGHT" : "DARK";
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("synthwave");
    } else {
      setTheme("light");
    }

    if (e.target.checked) {
      setSwitch(true);
    } else {
      setSwitch(false);
    }
  };
  return (
    <div className="navbar bg-base-100 shadow-lg  z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content
              mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-60 cursor-pointer space-y-4 text-xl font-semibold"
          >
            <li>
              <NavLink className={({isActive})=>isActive? 'text-primary font-bold': 'text-base font-semibold'} to="/">Home</NavLink>
            </li>

            <li>
              <NavLink className={({isActive})=>isActive? 'text-primary font-bold': 'text-base font-semibold'} to="/blogs">Blogs</NavLink>
            </li>
            <li>
              <NavLink className={({isActive})=>isActive? 'text-primary font-bold': 'text-base font-semibold'} to='/bookmarks'>Bookmarks</NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-3xl font-semibold">ByteBlaze</a>
      </div>
      <div className="navbar-end hidden md:flex">
        <ul className="menu cursor-pointer menu-horizontal space-x-7 px-1 text-navbarTextColor text-xl font-semibold">
          <li>
            <NavLink className={({isActive})=>isActive? 'text-primary font-bold': 'text-base font-semibold'} to="/home">Home</NavLink>
          </li>

          <li>
            <NavLink className={({isActive})=>isActive? 'text-primary font-bold': 'text-base font-semibold'} to="/blogs">Blogs</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=>isActive? 'text-primary font-bold': 'text-base font-semibold'} to='/bookmarks'>Bookmarks</NavLink>
          </li>
          <label className="cursor-pointer grid place-items-center">
            <input
              id="toggleBtn"
              type="checkbox"
              onClick={handleToggle}
              value="synthwave"
              className="toggle hidden theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
            />
            <p id="themeId">LIGHT</p>
          </label>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
