import React from 'react';
import { NavLink } from 'react-router-dom';
import { LiaHomeSolid  } from "react-icons/lia";
import { BsBoxSeam } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import './../Sidebar/Sidebar.css'

const Sidebar =() =>{
  return(
      <div className="sidebar">
          <ul>
            <li>
              <NavLink  
                to="/"
                className={({ isActive }) =>
                `rounded py-2 w-100 d-inline-block px-3 ${isActive ? 'active' : ''}`}
                >
                <LiaHomeSolid className="me-2 icon" />Inicio
              </NavLink>
            </li>
            <li>
              <NavLink 
              to="/empleados" 
              className={({ isActive }) =>
                `rounded py-2 w-100 d-inline-block px-3 ${isActive ? 'active' : ''}`}
               >
                <BsBoxSeam  className="me-2 icon"/>Productos
               </NavLink>
            </li>
            <li>
              <NavLink 
              to="/empleados-add" 
              className={({ isActive }) =>
                `rounded py-2 w-100 d-inline-block px-3 ${isActive ? 'active' : ''}`}
              >
                <CiDeliveryTruck className="me-2 icon"/>Entregas Produccion
              </NavLink>
            </li>
          </ul>
      </div>
  )
}
export default Sidebar