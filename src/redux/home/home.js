import Axios from 'axios';

const apiKey = 'e46a1e4dcc78426940c02823ffa6c553';
const initialState = [];

const FETCH_COMPANIES = 'finance/home/home';

export const fetchCompanies = (payload) => ({
  type: FETCH_COMPANIES,
  payload,
});

export const fetchCompaniesAPI = () => async (dispatch) => {
  const request = await Axios.get(`https://financialmodelingprep.com/api/v3/stock_market/actives?apikey=${apiKey}`);
  const companies = [];
  request.map((company) => {
    const id = company.symbol;
    const { name } = company;
    const { price } = company;
    const { change } = company;
    const item = {
      id, name, price, change,
    };
    return companies.push(item);
  });
  dispatch(fetchCompanies(companies));
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMPANIES:
      return action.payload;
    default:
      return state;
  }
};

export default homeReducer;
