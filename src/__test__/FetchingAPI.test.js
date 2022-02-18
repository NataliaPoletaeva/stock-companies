import '@testing-library/jest-dom/extend-expect';
import fetchDetails from './__mocks__/fetchDetails';
import fetchCompanies from './__mocks__/fetchCompanies';

describe('Companies are fetched as expected', () => {
  it('test fetching company name', async () => {
    await fetchCompanies().then((data) => expect(data.data[0].name).toBe('Ford Motor Company'));
  });
  it('test fetching symbol', async () => {
    await fetchCompanies().then((data) => expect(data.data[0].symbol).toBe('F'));
  });
  it('test fetching price', async () => {
    await fetchCompanies().then((data) => expect(data.data[0].price).toEqual('18.06'));
  });
  it('test fetching change', async () => {
    await fetchCompanies().then((data) => expect(data.data[0].change).toBe('0.52'));
  });
});

describe('details fetching is working as expected', () => {
  it('test fetching symbol', async () => {
    await fetchDetails().then((data) => expect(data.data[0].symbol).toBe('F'));
  });
  it('test fetching calendar year', async () => {
    await fetchDetails().then((data) => expect(data.data[0].calendarYear).toBe('2021'));
  });
  it('test fetching revenue', async () => {
    await fetchDetails().then((data) => expect(data.data[0].revenue).toBe('136341000000000'));
  });
  it('test fetching gross profit', async () => {
    await fetchDetails().then((data) => expect(data.data[0].grossProfit).toBe('2169000000000'));
  });
  it('test fetching interest income', async () => {
    await fetchDetails().then((data) => expect(data.data[0].interestIncome).toBe('261000000'));
  });
});
