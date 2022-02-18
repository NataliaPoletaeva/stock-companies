import React from 'react';
import PropTypes from 'prop-types';

const Detailcard = (props) => {
  const {
    detail: {
      year, revenue, revenueCost, grossProfit, researchExpenses, interestIncome, interestExpense,
    },
  } = props;
  return (
    <>
      {year}
      {revenue}
      {revenueCost}
      {grossProfit}
      {researchExpenses}
      {interestIncome}
      {interestExpense}
    </>
  );
};

Detailcard.propTypes = {
  year: PropTypes.string,
  revenue: PropTypes.number,
  revenueCost: PropTypes.number,
  grossProfit: PropTypes.number,
  researchExpenses: PropTypes.number,
  interestIncome: PropTypes.number,
  interestExpense: PropTypes.number,
}.isRequired;

export default Detailcard;
