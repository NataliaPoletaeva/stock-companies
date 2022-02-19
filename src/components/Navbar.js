import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { faAngleLeft, faMicrophone, faGear } from '@fortawesome/free-solid-svg-icons';
import '../styling/Home.css';

const Navbar = (props) => {
  const { home } = props;
  return (
    <nav>
      {home
        && (
          <div className="navbar">
            <div className="logo">
              Stocks
            </div>
            <div className="icons">
              <FontAwesomeIcon icon={faMicrophone} color="white" />
              <FontAwesomeIcon icon={faGear} color="white" />
            </div>
          </div>
        )}
      {!home
        && (
          <div className="navbar">
            <Link to="/">
              <div className="back">
                <FontAwesomeIcon icon={faAngleLeft} color="white" />
              </div>
            </Link>
            <div className="logo">
              Company Information
            </div>
            <div className="icons">
              <FontAwesomeIcon icon={faMicrophone} color="white" />
              <FontAwesomeIcon icon={faGear} color="white" />
            </div>
          </div>
        )}
    </nav>
  );
};

Navbar.propTypes = {
  home: PropTypes.bool,
}.isRequired;

export default Navbar;
