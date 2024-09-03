import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h2 className="text-2xl">NavBar</h2>
      <nav className="flex gap-5 flex-row text-primary font-bold">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/posts">Post</NavLink>
        <NavLink to="/photos"> Photos</NavLink>
      </nav>
    </div>
  );
};

export default Header;
