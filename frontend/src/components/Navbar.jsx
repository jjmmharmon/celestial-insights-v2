import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import SignResolver from "./SignResolver";

const Navbar = () => {
  let sign = "Unknown";
  let signRes = " ";
  let userGender = " ";
  let themeColor = "red";
  const { id } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    axios
      .get(`/api/getUser/${id}`)
      .then((user) => setUser(user.data))
      .catch((err) => console.log(err));
  }, []);

  if (user != null) {
    signRes = SignResolver(user.sign);
    userGender = user.gender;
  }

  switch (signRes.element) {
    case "Air":
      themeColor = "violet";
      break;
    case "Water":
      themeColor = "blue";
      break;
    case "Earth":
      themeColor = "green";
      break;
    case "Fire":
      themeColor = "red";
      break;
    default:
      themeColor = "violet";
  }

  

  return (
    <>
      <nav
        className={`flex items-center  justify-between flex-wrap bg-${themeColor}-950 p-6`}
      >
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <svg
            className="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span className="font-semibold text-xl tracking-tight">
            Celestial Insights
          </span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link
              to={`/users/${id}/account`}
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Account
            </Link>
            <Link
              to="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Examples
            </Link>
            <Link
              to="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
            >
              Blog
            </Link>
          </div>
          <div>
            <Link
              to="/sign-up"
              className="inline-block text-sm px-4 py-2 leading-none border mx-1  rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              className="inline-block text-sm px-4 py-2 leading-none border mx-1 rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Sign In
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
