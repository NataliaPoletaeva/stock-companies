import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { fetchCompaniesAPI } from '../../redux/home/home';
import Homecard from './Homecard';
import img from '../../styling/jungle-finance-1.png';
import '../../styling/Home.css';

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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="home-list">
      <div className="image">
        <img src={img} alt="stocks info" />
      </div>
      <form className="search-bar" onSubmit={handleSubmit}>
        <input className="search-input" type="text" placeholder="Search..." onChange={(e) => setValue(e.target.value)} value={value} />
        <button className="search-btn" type="submit">
          <FontAwesomeIcon className="glass" icon={faMagnifyingGlass} color="white" />
        </button>
      </form>
      <ul className="cardlist">
        {
          filtered.map((company) => (
            <li className="home-card" key={Math.random()}>
              <Link
                id={company.id}
                to={`/details/${company.id}`}
              >
                <Homecard
                  company={company}
                />
              </Link>
            </li>
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
