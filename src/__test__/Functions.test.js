import homeReducer, { fetchCompanies } from '../redux/home/home';
import detailsReducer, { fetchDetails } from '../redux/details/details';

describe('fetching data should work as expected', () => {
  test('return the correct data', () => {
    const test = [
      {
        symbol: 'AAPL',
        name: 'Apple Inc.',
        price: '168.093',
        change: '-0.787',
      },
    ];
    const action = fetchCompanies(test);
    const res = {
      type: 'finance/home/home',
      payload: test,
    };
    expect(action).toEqual(res);
  });
});

describe('fetching details should work as expected', () => {
  test('return the correct details', () => {
    const test = [
      {
        symbol: 'F',
        calendarYear: '2020',
        revenue: '127144000000000',
        grossProfit: '1439200000000',
        interestIncome: '450000000',
      },
    ];
    const action = fetchDetails(test);
    const res = {
      type: 'finance/home/details',
      payload: test,
    };
    expect(action).toEqual(res);
  });
});

describe('data reducer should work as expectred', () => {
  test('should return actives', () => {
    const action = {
      type: 'finance/home/home',
      payload: [
        {
          symbol: 'F',
          name: 'Ford Motor Company',
          price: '18.06',
          change: '0.52',
        },
      ],
    };
    const reducer = homeReducer([], action);
    expect(reducer).toEqual({ home: action.payload });
  });
});

describe('details reducer should work as expectred', () => {
  test('should return details', () => {
    const action = {
      type: 'finance/home/details',
      payload: [
        {
          symbol: 'F',
          calendarYear: '2021',
          revenue: '136341000000000',
          grossProfit: '2169000000000',
          interestIncome: '261000000',
        },
      ],
    };
    const reducer = detailsReducer([], action);
    expect(reducer).toEqual({ details: action.payload });
  });
});
