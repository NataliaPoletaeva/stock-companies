import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import '../../styling/Home.css';

const Homecard = (props) => {
  const {
    company: {
      id,
      name,
      price,
      change,
    },
  } = props;

  return (
    <>
      <div className="card-title">
        <div className="name">{name}</div>
        <div className="id-symbol">{id}</div>
      </div>
      <div className="card-prices">
        <div>
          $
          {' '}
          {price}
        </div>
        <div className="changes">
          {change > 0 ? (<FontAwesomeIcon className="arrow" icon={faArrowUp} color="green" />)
            : (<FontAwesomeIcon className="arrow" icon={faArrowDown} color="red" />)}
          {' '}
          {change}
        </div>
      </div>
    </>
  );
};

Homecard.propTypes = {
  company: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
    price: PropTypes.number,
    change: PropTypes.number,
  }).isRequired,
};

export default Homecard;
