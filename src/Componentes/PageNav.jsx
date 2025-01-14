import React from "react";
import { NavLink } from "react-router-dom";
import "./PageNav.css";

function PageNav() {
  return (
    <nav className="nav , DisplayNotMax481px ">
      <ul className="horizontal-list">
        <li>
          <NavLink to="/TopUrbanismo">Top Urbanismos </NavLink>
        </li>
        <li>
          <NavLink to="/Indicadores">Lista de Clientes </NavLink>
        </li>
        <li>
          <NavLink to="/Ventas">Ventas </NavLink>
        </li>
        <li>
          <NavLink to="/Ventascalle2">Vendedores </NavLink>
        </li>
        <li>
          <NavLink to="/Admin">Adm. Ingresos</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
