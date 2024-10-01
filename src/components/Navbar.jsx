import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { Tooltip } from "react-tooltip";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [dark, setDark] = useState(false);

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => `${isActive ? "border-2" : "border-0"}`}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/need-volunteer"
          className={({ isActive }) => `${isActive ? "border-2" : "border-0"}`}
        >
          Need Volunteer
        </NavLink>
      </li>
    </>
  );

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <div className="navbar bg-base-100 justify-between dark:bg-black">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Volunteer</a>
      </div>
      <div className="flex gap-6">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex gap-3 items-center">
              <div
                className="size-12 rounded-full overflow-hidden"
                id="clickable"
              >
                <img
                  referrerPolicy='no-referrer'
                  alt='User Profile Photo'
                  src={user?.photoURL}
                />
              </div>
              <Tooltip
                anchorSelect="#clickable"
                clickable
                style={{
                  borderRadius: "8px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <p className="font-medium text-base">{user.displayName}</p>
                <button
                  onClick={logOut}
                  className="btn mb-2 bg-[#4793AF] text-white border-none text-base hover:bg-[#32697c]"
                >
                  Log out
                </button>
              </Tooltip>
            </div>
          ) : (
            <>
              <NavLink
                className={({ isActive }) =>
                  `p-2 rounded-md ${
                    isActive ? "border-2" : "border-0"
                  }`
                }
                to="/login"
              >
                Login
              </NavLink>
            </>
          )}
        </div>
        <button onClick={darkModeHandler} className="text-xl dark:text-white">
          {dark ? <IoSunny /> : <IoMoon />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
