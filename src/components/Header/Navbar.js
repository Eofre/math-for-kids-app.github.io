import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(props) {
  //   const [sidebar, setSidebar] = useState(false);

  //   const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <button className="btn" onClick={props.showSidebar}></button>
        </Link>
      </div>
      <nav className={props.sidebar ? "nav-menu active" : "nav-menu"}>
        <button className="btn" onClick={props.showSidebar}></button>
        <ul className="list" onClick={props.showSidebar}>
          <li className="item">
            <Link to="/" className="link">
              Сложение
            </Link>
          </li>
          <li className="item">
            <Link to="/subtraction" className="link">
              Вычитание
            </Link>
          </li>
          <li className="item">
            <Link to="/multiplication" className="link">
              Умножение
            </Link>
          </li>
          <li className="item">
            <Link to="/divide" className="link">
              Деление
            </Link>
          </li>
          <li className="item">
            <Link to="#" className="link">
              Теория сложения
            </Link>
          </li>
          <li className="item">
            <Link to="#" className="link">
              Теория вычитания
            </Link>
          </li>
          <li className="item">
            <Link to="#" className="link">
              Теория умножения
            </Link>
          </li>
          <li className="item">
            <Link to="#" className="link">
              Теория деления
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
