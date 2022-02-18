import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import Homelist from './homeComponents/Homelist';

const Home = () => {
  const home = useSelector((state) => state.homeReducer.home);

  return (
    <div>
      <Navbar />
      <Homelist home={home} />
    </div>
  );
};

export default Home;
