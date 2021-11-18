import React from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
// import './Nav.css'; //style later .active classes


const Nav = ({dogs}) => {
  return (
      <nav>
        {
          dogs.map(dog => {
            return (
              <NavLink exact={"true"} to={`dogs/${dog.name}`}>Chips</NavLink>
            )
          })
        }
      </nav>
  );
};

export default Nav;
