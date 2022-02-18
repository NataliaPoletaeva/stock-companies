import React from 'react';
import PropTypes from 'prop-types';
import Detailcard from './Detailcard';

const Detaillist = (props) => {
  const { id, details } = props;

  return (
    <ul className="detail-list">
      {details.map((detail) => (
        <li className="card" key={Math.random()}>
          <Detailcard id={id} detail={detail} />
        </li>
      ))}
    </ul>
  );
};

Detaillist.propTypes = {
  id: PropTypes.string,
  details: PropTypes.array,
}.isRequired;

export default Detaillist;
