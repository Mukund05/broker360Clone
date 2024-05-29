import React from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 bg-white shadow-lg z-50">
      <div className="container  flex items-center justify-between  py-4 max-w-full px-4">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" className="max-w-24 sm:max-w-32" />
        </Link>

        <div className="flex items-center space-x-6 sm:space-x-16 ">
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/login" className="text-gray-800 font-semibold">
                  Inicio
                </Link>
              </li>
            </ul>
          </nav>
          <button
            className="bg-[#011B4E]  text-white font-semibold py-3 px-6 sm:px-8 rounded-md text-xs sm:text-md"
            onClick={() => {
              navigate("/subscription-plans");
            }}
          >
            Comienza Ahora
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
