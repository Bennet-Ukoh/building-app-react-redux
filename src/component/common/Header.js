import React from "react";
import { NavLink } from "react-router-dom";
import '../../styles/Header.css'

const Header = () => {
  // const activeStyle = { color: "#F15B2A" };
  return (
    <nav>
      <NavLink to="/" activestyle='active' exact='true'>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/courses" activestyle='active'>
        Courses
      </NavLink>
      {" | "}
      <NavLink to="/about" activestyle='active'>
        About
      </NavLink>
    </nav>
  );
};

export default Header;
