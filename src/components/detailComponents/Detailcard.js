import React from 'react';
import PropTypes from 'prop-types';
import '../../styling/Details.css';

const Detailcard = (props) => {
  const {
    detail: {
      year, revenue, grossProfit, interestIncome,
    },
  } = props;
  return (
    <ul className="detail-card">
      <li className="detail-item">
        Calendar year:
        {' '}
        {' '}
        {year}
      </li>
      <li className="detail-item">
        Total revenue: $
        {' '}
        {revenue / (10 ** 9)}
        {' '}
        billion
      </li>
      <li className="detail-item">
        Profit: $
        {' '}
        {grossProfit / (10 ** 9)}
        billion
      </li>
      <li className="detail-item">
        Interest income: $
        {' '}
        {interestIncome / (10 ** 9)}
        billion
      </li>
    </ul>
  );
};

Detailcard.propTypes = {
  detail: PropTypes.shape({
    year: PropTypes.string,
    revenue: PropTypes.number,
    grossProfit: PropTypes.number,
    interestIncome: PropTypes.number,
  }).isRequired,
};

export default Detailcard;
