import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchDetailsAPI } from '../redux/details/details';
import Detaillist from './detailComponents/Detaillist';
import Navbar from './Navbar';

const Details = () => {
  const params = useParams();
  const { symbol } = params;
  const dispatch = useDispatch();

  const details = useSelector((state) => state.detailsReducer.details);

  useEffect(() => {
    dispatch(fetchDetailsAPI(params));
  }, []);

  return (
    <div className="detail-page">
      <Navbar details symbol={symbol} />
      <p className="symbol">
        {symbol}
      </p>
      <Detaillist details={details} />
    </div>
  );
};

export default Details;
