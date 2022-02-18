import Axios from 'axios';

const apiKey = 'e46a1e4dcc78426940c02823ffa6c553';
const initialState = {
  home: [],
};

const FETCH_COMPANIES = 'finance/home/home';

export const fetchCompanies = (payload) => ({
  type: FETCH_COMPANIES,
  payload,
});

export const fetchCompaniesAPI = () => async (dispatch) => {
  const info = await Axios.get(`https://financialmodelingprep.com/api/v3/stock_market/actives?apikey=${apiKey}`);
  const request = info.data;
  const companies = [];
  request.map((item) => {
    const id = item.symbol;
    const { name } = item;
    const { price } = item;
    const { change } = item;
    const company = {
      id, name, price, change,
    };
    return companies.push(company);
  });
  dispatch(fetchCompanies(companies));
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMPANIES:
      return { home: action.payload };
    default:
      return state;
  }
};

export default homeReducer;
