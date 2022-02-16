import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <NavLink className="logo" to="/">Stocks Info</NavLink>
    </div>
  );
}

export default Navbar;
