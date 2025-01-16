import React, { useState } from "react";
import "./DropdownMenu.css";
import { NavLink } from "react-router-dom";

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className={`dropdown-container ${isOpen ? 'open' : ''}`}>
      <button onClick={toggleDropdown} className="dropdown-button">
        <span className="menu-icon">&#9776;</span> Menu
      </button>
      {isOpen && (
        <ul className="dropdown-content">
          <li>
            <NavLink to="/TopUrbanismo" className="dropdown-link">
              Top Urbanismos
            </NavLink>
          </li>
          <li>
            <NavLink to="/Indicadores" className="dropdown-link">
              Lista de Clientes
            </NavLink>
          </li>
          <li>
            <NavLink to="/*" className="dropdown-link">
              Indicadores de Ventas Globales
            </NavLink>
          </li>
          <li>
            <NavLink to="/*" className="dropdown-link">
              Equipo de Ventas
            </NavLink>
          </li>
          <li>
            <NavLink to="/Admin" className="dropdown-link">
              Adm. Ingresos
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
}

export default DropdownMenu;
