import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import useAuth from "../hooks/useAuth";
import { Skeleton } from "@mui/material";
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
  const { user, logOut, loading } = useAuth();

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            "--underline-width": isActive ? "100%" : "0%",
          })}
        >
          <span className="pb-1 px-1 relative before:absolute before:w-[var(--underline-width)] before:h-[2px] before:bottom-0 before:left-0 before:bg-secondary3 hover:before:w-full before:transition-[width] before:duration-200">
            Home
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/need-volunteer"
          style={({ isActive }) => ({
            "--underline-width": isActive ? "100%" : "0%",
          })}
        >
          <span className="pb-1 px-1 relative before:absolute before:w-[var(--underline-width)] before:h-[2px] before:bottom-0 before:left-0 before:bg-secondary3 hover:before:w-full before:transition-[width] before:duration-200">
            Need Volunteer
          </span>
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-primary1 text-secondary3 justify-between py-4 px-3 md:px-6 text-sm shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden p-0 mr-2"
          >
            <IoIosMenu className="text-2xl" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/need-volunteer">Need Volunteer</NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className="text-xl font-semibold">
          Volunteer
        </Link>
      </div>
      <div className="flex justify-end items-center">
        <div className="hidden lg:flex">
          <ul className="p-0 flex items-center gap-6 text-sm">{navLinks}</ul>
        </div>
        <div className="flex items-center gap-3">
          <div className="lg:ml-[10px] dropdown dropdown-end">
            <ul className="menu menu-horizontal px-1">
              <li>
                <details>
                  <summary>My Profile</summary>
                  <ul className="p-2 w-52 dropdown-content text-black z-50">
                    <li>
                      <NavLink to="/add-volunteer-post">
                        Add Volunteer Post
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/manage-my-post">Manage My Post</NavLink>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>

          <div className="size-12 ml-2 flex justify-center items-center">
            {loading ? (
              <Skeleton variant="circular" width={48} height={48} />
            ) : user ? (
              <div className="flex gap-3 items-center">
                <div
                  className="size-12 rounded-full overflow-hidden"
                  id="clickable"
                >
                  <img
                    referrerPolicy="no-referrer"
                    alt="User Profile Photo"
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
                    alignItems: "center",
                    gap: "10px",
                    padding: "10px",
                  }}
                >
                  <p className="font-medium text-sm">{user.displayName}</p>
                  <button
                    onClick={logOut}
                    className="py-2 px-4 rounded-md bg-secondary1 text-white border-none text-sm hover:bg-secondary1/75 transition-colors"
                  >
                    Log out
                  </button>
                </Tooltip>
              </div>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className="w-12"
                  style={({ isActive }) => ({
                    "--underline-width": isActive ? "100%" : "0%",
                  })}
                >
                  <span className="pb-1 px-1 relative before:absolute before:w-[var(--underline-width)] before:h-[2px] before:bottom-0 before:left-0 before:bg-secondary3 hover:before:w-full before:transition-[width] before:duration-200">
                    Login
                  </span>
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
