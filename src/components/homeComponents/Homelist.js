import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchCompaniesAPI } from '../../redux/home/home';
import Homecard from './Homecard';

const Homelist = ({ home }) => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (home.length === 0) {
      dispatch(fetchCompaniesAPI());
    }
  }, []);

  const filtered = home.filter((company) => company.name
    .toLowerCase()
    .includes(value.toLowerCase().trim()));

  return (
    <div className="home-list">
      <form className="search-bar">
        <input className="search-input" type="text" placeholder="Search..." onChange={(e) => setValue(e.target.value)} value={value} />
        <button className="search-btn" type="button">Search</button>
      </form>
      <ul>
        {
          filtered.map((company) => (
            <Link
              id={company.id}
              key={Math.random()}
              to={`/details/${company.id}`}
            >
              <Homecard
                company={company}
              />
            </Link>
          ))
        }
      </ul>
    </div>
  );
};

Homelist.propTypes = {
  request: PropTypes.array,
}.isRequired;

export default Homelist;
