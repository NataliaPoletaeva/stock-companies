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
  const info = await Axios.get(`https://financialmodelingprep.com/api/v3/income-statement/${props.symbol}?limit=120&apikey=${apiKey}`);
  const request = info.data;
  const details = [];
  request.map((item) => {
    const id = item.symbol;
    const year = item.calendarYear;
    const { revenue } = item;
    const { grossProfit } = item;
    const gpRatio = item.grossProfitRatio;
    const { interestIncome } = item;
    const detail = {
      id, year, revenue, grossProfit, gpRatio, interestIncome,
    };
    return details.push(detail);
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
