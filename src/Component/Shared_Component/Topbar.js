import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../UserContext/UserContext";

const Navbar = () => {
  const { user, logOut } = useContext(Authcontext);
  console.log("photo", user?.photoURL);
  return (
    <div>
      <div
        className="navbar base-content	bg-info-content "
        style={{ color: "white" }}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label className="btn btn-ghost lg:hidden">
              <svg
                style={{ color: "white" }}
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
            </label>
            <ul
              style={{ color: "white", textDecoration: "none" }}
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>FAQ</a>
              </li>
              <li>
                <Link
                  to="/courses"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/home" style={{ textDecoration: "none" }}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/login" style={{ textDecoration: "none" }}>
                  LOGIN
                </Link>
              </li>
              <li>
                <Link to="/registration" style={{ textDecoration: "none" }}>
                  REGISTRATION
                </Link>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl"
            style={{ color: "white" }}
          >
            EDU
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/faq" style={{ textDecoration: "none" }}>
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/home" style={{ textDecoration: "none" }}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="/courses" style={{ textDecoration: "none" }}>
                COURSES
              </Link>
              <ul className="p-2">
                <li>
                  <Link style={{ textDecoration: "none" }}>Java</Link>
                </li>
              </ul>
            </li>

            <li>
              {user?.uid ? (
                <>
                  <li>
                    <img className="ml-9 h-14 w-16" src={user?.photoURL} />
                  </li>
                  <li>
                    <button
                      onClick={logOut}
                      className="py-2 px-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 ml-9"
                    >
                      LOG OUT
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link style={{ textDecoration: "none" }} to="/login">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link style={{ textDecoration: "none" }} to="/registration">
                      Registration
                    </Link>
                  </li>
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
