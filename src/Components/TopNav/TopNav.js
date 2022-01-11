import React from 'react';
import Nav from '../../Picture/Nav.png';
import Cart from '../../Picture/CartButton.png';
import Combine from '../../Picture/compine.png';
import './TopNav.css';
import { Link } from 'react-router-dom';

function TopNav() {
  return (
    <div className="header">
      <span className="nav">
        <img className="nav-btn" src={Nav} alt="" />
      </span>
      {/* list menu pc */}
      <span>
        <ul className="header-list-main">
          <li className="list-main-item">
            <Link to="/">Home</Link>
          </li>
          <li className="list-main-item">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="list-main-item">
            <Link to="/magazine">Magazine</Link>
          </li>
        </ul>
      </span>
      <span className="right-nav">
        <Link to="/cart">
          <img className="cart" src={Cart} alt="" />
        </Link>
        <img className="combine" src={Combine} alt="" />

        <Link className="login" to="login">
          Login
        </Link>
      </span>
    </div>
  );
}

export default TopNav;
