import React from 'react';
import MenuBarTemplate from 'templates/MenuBarTemplate';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import Button from 'components/atoms/Button/Button';
import FlagBox from 'components/atoms/FlagBox/FlagBox';
import Heading from 'components/atoms/Heading/Heading';
import DataSet, { StyledDataSet } from 'components/molecules/DataSet/DataSet';

const StyledBar = styled.div`
  width: 100%;
  padding: 40px 24px 64px;

  @media screen and (min-width: 768px) {
    padding: 40px 10% 64px;
  }
`;

const StyledInner = styled.div`
  width: 100%;
  padding: 0 24px 120px;
  display: grid;
  grid-template-rows: 60vw 1fr;
  grid-gap: 56px;

  @media screen and (min-width: 768px) {
    grid-template-rows: 300px 1fr;
    padding: 0 10% 120px;
  }

  @media screen and (min-width: 1024px) {
    grid-gap: 64px;
    grid-template-rows: unset;
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 1366px) {
    grid-gap: 120px;
    grid-template-rows: unset;
    grid-template-columns: 1fr 1fr;
  }
`;

const StyledDataWrapper = styled.div`
  @media screen and (min-width: 1280px) {
    padding: 40px 0;
  }
`;

const StyledEssentialData = styled.div`
  display: grid;
  grid-gap: 16px 0;
  grid-auto-flow: row;
  align-items: center;
  margin: 24px 0 64px;

  ${StyledDataSet} {
    &:nth-of-type(6n) {
      margin-top: 24px;
    }
  }

  @media screen and (min-width: 660px) {
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 12px 32px;
    grid-auto-flow: column;

    ${StyledDataSet} {
      &:nth-of-type(6n) {
        margin-top: 0;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    grid-gap: 16px 0;
    grid-auto-flow: row;
    grid-template-rows: unset;
    grid-template-columns: unset;

    ${StyledDataSet} {
      &:nth-of-type(6n) {
        margin-top: 24px;
      }
    }
  }

  @media screen and (min-width: 1280px) {
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: repeat(2, 1fr);
    grid-auto-flow: column;
    grid-gap: 6px 24px;
    margin: 24px 0 48px;

    ${StyledDataSet} {
      &:nth-of-type(6n) {
        margin-top: 0;
      }
    }
  }
`;

const DetailsTemplate = ({
  flagUrl,
  name,
  nativeName,
  population,
  region,
  subRegion,
  capital,
  topLevelDomain,
  currencies,
  languages,
  borderCountries,
  theme: { icons }
}) => {
  return (
    <MenuBarTemplate>
      <StyledBar>
        <Button as={Link} to={routes.home} icon={icons.arrow}>
          Back
        </Button>
      </StyledBar>
      <StyledInner>
        <FlagBox url={flagUrl} />
        <StyledDataWrapper>
          <Heading as="h2" large>
            {name}
          </Heading>
          <StyledEssentialData>
            <DataSet type="text" label="Native name" value={nativeName} />
            <DataSet type="text" label="Population" value={population} />
            <DataSet type="text" label="Region" value={region} />
            <DataSet type="text" label="Sub region" value={subRegion} />
            <DataSet type="text" label="Capital" value={capital} />
            <DataSet type="text" label="Top level domain" value={topLevelDomain} />
            <DataSet type="text" label="Currencies" value={currencies} />
            <DataSet type="text" label="Languages" value={languages} />
          </StyledEssentialData>
          <DataSet
            type="buttons"
            label="Border countries"
            value={borderCountries}
            nullMessage="Don't border with any country"
          />
        </StyledDataWrapper>
      </StyledInner>
    </MenuBarTemplate>
  );
};

DetailsTemplate.propTypes = {
  flagUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nativeName: PropTypes.string.isRequired,
  population: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  region: PropTypes.string.isRequired,
  subRegion: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  topLevelDomain: PropTypes.string.isRequired,
  currencies: PropTypes.string.isRequired,
  languages: PropTypes.string.isRequired,
  borderCountries: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired,
  theme: PropTypes.shape({
    icons: PropTypes.objectOf(PropTypes.string).isRequired
  }).isRequired
};

export default withTheme(DetailsTemplate);
