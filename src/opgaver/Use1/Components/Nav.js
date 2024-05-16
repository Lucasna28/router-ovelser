import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-yellow-500"
      : "text-white hover:text-gray-300";
  };

  return (
    <nav className="flex justify-between w-[20rem] bg-gray-900 p-4">
      <Link
        to="/home"
        className={`mx-2  ${getLinkClass(
          "/home"
        )} transition duration-300 ease-in-out`}
      >
        Home
      </Link>
      <Link
        to="/about"
        className={`mx-2  ${getLinkClass(
          "/about"
        )} transition duration-300 ease-in-out`}
      >
        About
      </Link>
      <Link
        to="/contact"
        className={`mx-2  ${getLinkClass(
          "/contact"
        )} transition duration-300 ease-in-out`}
      >
        Contact
      </Link>
    </nav>
  );
}
