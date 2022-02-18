import Axios from 'axios';

const apiKey = 'e46a1e4dcc78426940c02823ffa6c553';
const initialState = {
  details: [],
};

const FETCH_DETAILS = 'finance/home/details';

export const fetchDetails = (payload) => ({
  type: FETCH_DETAILS,
  payload,
});

export const fetchDetailsAPI = (props) => async (dispatch) => {
  const info = await Axios.get(`https://financialmodelingprep.com/api/v3/income-statement/${props.symbol}?limit=40&apikey=${apiKey}`);
  const request = info.data;
  const details = [];
  request.map((detail) => {
    const id = detail.symbol;
    const year = detail.calendarYear;
    const { revenue } = detail;
    const revenueCost = detail.costOfRevenue;
    const { grossProfit } = detail;
    const gpRatio = detail.grossProfitRatio;
    const { interestIncome } = detail;
    const { interestExpense } = detail;
    const item = {
      id, year, revenue, revenueCost, grossProfit, gpRatio, interestIncome, interestExpense,
    };
    return details.push(item);
  });
  dispatch(fetchDetails(details));
};

const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DETAILS:
      return { details: action.payload };
    default:
      return state;
  }
};

export default detailsReducer;
