import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images.png"
import {CiSearch} from "react-icons/ci"


function Header() {
  return (
    <nav className="header">
        <img src={logo} alt="" />
        <div>

            <Link to={"/"}>Home</Link>
            <Link to={"/tvShows"}>TV shows</Link>
            <Link to={"/movies"}>Movies</Link>
            <Link to={"/recently_added"}>Recently Added</Link>
            <Link to={"/mylist"}>MY List</Link>

        </div>

        <CiSearch/>
    </nav>
  );
};
export default Header;
