import React, { useContext, useState, useRef } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';  // Assuming logo.png is also in the same folder
import cart_icon from '../Assets/cart_icon.png';  // Assuming cart_icon.png is also in the same folder
import { Link } from 'react-router-dom';
import { HomeContext } from '../../Context/HomeContext'; // Corrected import path
import nav_dropdown from '../Assets/nav_dropdown.png'
const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const { getTotalCartItems } = useContext(HomeContext);
  const menuRef = useRef();
  const dropdown_toggle=(e)=>{
      menuRef.current.classList.toggle('nav-menu-visible');
      e.target.classList.toggle('open');
  }
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="Shopper Logo" />
        <p>Shopper</p>
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt=""/>
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => setMenu('home')}>
          <Link style={{ textDecoration: "none" }} to='/'>Home</Link>
          {menu === "home" && <hr />}
        </li>
        <li onClick={() => setMenu('mens')}>
          <Link style={{ textDecoration: "none" }} to='/mens'>Mens</Link>
          {menu === "mens" && <hr />}
        </li>
        <li onClick={() => setMenu('women')}>
          <Link style={{ textDecoration: "none" }} to='/women'>Women</Link>
          {menu === "women" && <hr />}
        </li>
        <li onClick={() => setMenu('kids')}>
          <Link style={{ textDecoration: "none" }} to='/kids'>Kids</Link>
          {menu === "kids" && <hr />}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cart">
          <img src={cart_icon} alt="Cart Icon" />
        </Link>
        <div className="nav-cart-count">
          {getTotalCartItems()}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
