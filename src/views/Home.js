import React from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const { pathname } = useLocation();

  return <p>Jesteś na stronie {pathname.substr(1)}</p>;
};

export default Home;
