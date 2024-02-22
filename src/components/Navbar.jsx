import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.5rem 3rem',
    backgroundColor: 'rgb(216 216 216)',
    color: '#000',
  };

  const logoStyle = {
    fontWeight: 'bold',
    fontSize: '24px',
  };

  const navItemsStyle = {
    listStyle: 'none',
    display: 'flex',
  };

  const navItemStyle = {
    margin: '0 10px',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#000',
  };

  return (
    <nav style={navbarStyle}>
      <div style={logoStyle}>
        <Link to={"/"}  style={{color : "black" , textDecoration : "none"}}>
        Capstone
        </Link>
         </div>
      <ul style={navItemsStyle}>
        <li style={navItemStyle}>
          <Link to="/contact" style={linkStyle}>Contact</Link>
        </li>
        <li style={navItemStyle}>
          <Link to="/login" style={linkStyle}>Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
