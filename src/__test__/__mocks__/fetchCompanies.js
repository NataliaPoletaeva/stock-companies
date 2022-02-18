import companies from './fetchCompaniesAPI';

const fetchCompanies = () => companies().then((data) => data);

export default fetchCompanies;
