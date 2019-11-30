import React from 'react';
import ListTemplate from 'templates/ListTemplate';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const { pathname } = useLocation();

  return (
    <ListTemplate>
      <p>Jesteś na stronie {pathname.substr(1)}</p>
    </ListTemplate>
  );
};

export default Home;
