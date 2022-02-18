import details from './fetchDetailsAPI';

const fetchDetails = () => details().then((data) => data);

export default fetchDetails;
