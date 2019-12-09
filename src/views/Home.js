import React from 'react';
import ListTemplate from 'templates/ListTemplate';
import withDataContext from 'hoc/withDataContext';
import Card from 'components/molecules/Card/Card';
import PropTypes from 'prop-types';

const Home = ({ dataContext }) => {
  return (
    <ListTemplate>
      {dataContext.map(({ name, population, region, capital, flag }) => (
        <Card
          key={name}
          title={name}
          desc={[
            { label: 'Population', value: population },
            { label: 'Region', value: region },
            { label: 'Capital', value: capital }
          ]}
          flagUrl={flag}
        />
      ))}
    </ListTemplate>
  );
};

Home.propTypes = {
  dataContext: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

export default withDataContext(Home);
