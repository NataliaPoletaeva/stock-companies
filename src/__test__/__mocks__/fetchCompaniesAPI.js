const companies = () => Promise.resolve({
  data: [
    {
      symbol: 'F',
      name: 'Ford Motor Company',
      price: '18.06',
      change: '0.52',
    },
    {
      symbol: 'AAPL',
      name: 'Apple Inc.',
      price: '168.093',
      change: '-0.787',
    },
  ],
});

export default companies;
