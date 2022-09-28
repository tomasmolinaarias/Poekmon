import React from "react";
import { Link } from "react-router-dom";
import("../style.css");
export const Nav = () => {
  return (
    <div className="navbar  navbar-dark  bg-dark">
      <Link
        className="navbar-brand d-flex justify-content-center text-center"
        to="/"
      >
        LISTA DE POKEMONES
      </Link>
    </div>
  );
};
