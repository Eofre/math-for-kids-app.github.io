import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Addition from "../Addition";
import Divide from "../Divide";
import Multiplication from "../Multiplication";
import Subtraction from "../Subtraction";

function Navigation() {
  return (
    <nav className="header__nav">
      <ul className="header__list">
        <li className="header__item">
          <Link to="/" className="header__link">
            Сложение
          </Link>
        </li>
        <li className="header__item">
          <Link to="/subtraction" className="header__link">
            Вычитание
          </Link>
        </li>
        <li className="header__item">
          <Link to="/multiplication" className="header__link">
            Умножение
          </Link>
        </li>
        {/* <li className="header__item">
          <Link to="/divide" className="header__link">
            Деление
          </Link>
        </li> */}
      </ul>
    </nav>
  );
}

export default Navigation;
