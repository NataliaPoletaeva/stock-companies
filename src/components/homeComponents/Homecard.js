import React from 'react';
import PropTypes from 'prop-types';

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
    <li>
      {name}
      {id}
      {price}
      {change}
    </li>
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
