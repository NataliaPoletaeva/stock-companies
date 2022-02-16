import Axios from 'axios';

const apiKey = 'e46a1e4dcc78426940c02823ffa6c553';
const initialState = [];

const FETCH_DETAILS = 'finance/home/details';

export const fetchDetails = (payload) => ({
  type: FETCH_DETAILS,
  payload,
});

export const fetchDetailsAPI = () => async (dispatch) => {
  const request = await Axios.get(`https://financialmodelingprep.com/api/v3/income-statement/?limit=40&apikey=${apiKey}`);
  const details = [];
  request.map((detail) => {
    const id = detail.symbol;
    const { revenue } = detail;
    const revenueCost = detail.costOfRevenue;
    const { grossProfit } = detail;
    const researchExpenses = detail.researchAndDevelopmentExpenses;
    const { interestIncome } = detail;
    const { interestExpense } = detail;
    const item = {
      id, revenue, revenueCost, grossProfit, researchExpenses, interestIncome, interestExpense,
    };
    return details.push(item);
  });
  dispatch(fetchDetails(details));
};

const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DETAILS:
      return action.payload;
    default:
      return state;
  }
};

export default detailsReducer;
