import React from "react";
import {
  FaHome,
  FaUser,
  FaBook,
  FaPhone,
  FaMedal,
} from "react-icons/fa";
import "./Navbar.css";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  return (
    <BrowserRouter>
      <section>
        <nav>
          <div className="mynavbar">
            <Link to="#myheader" smooth>
              {" "}
              <FaHome />{" "}
            </Link>
            <Link to="#myabout" smooth>
              {" "}
              <FaUser />{" "}
            </Link>
            <Link to="#myexperience" smooth>
              {" "}
              <FaBook />{" "}
            </Link>
           
            <Link to="#myportofolio" smooth>
              {" "}
              <FaMedal />{" "}
            </Link>
            <Link to="#mycontact" smooth>
              {" "}
              <FaPhone />{" "}
            </Link>
          </div>
        </nav>
      </section>
    </BrowserRouter>
  );
};

export default Navbar;
