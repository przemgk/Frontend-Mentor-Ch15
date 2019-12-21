import React from 'react';
import MenuBarTemplate from 'templates/MenuBarTemplate';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FilterBar from 'components/organisms/FilterBar/FilterBar';
import Preloader from 'components/molecules/Preloader/Preloader';
import NoResults from 'components/molecules/NoResults/NoResults';

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-gap: 40px;
  width: 100%;
  padding: 0 10%;

  @media screen and (min-width: 768px) {
    grid-gap: 64px;
  }
`;

const ListTemplate = ({
  children,
  handleSearching,
  preloaderActive,
  noResults,
  noResultsSearchQuery
}) => (
  <MenuBarTemplate>
    <FilterBar handleSearching={handleSearching} />
    {!preloaderActive && <StyledGrid>{children}</StyledGrid>}
    {preloaderActive && <Preloader />}
    {noResults && <NoResults searchQuery={noResultsSearchQuery} />}
  </MenuBarTemplate>
);

ListTemplate.propTypes = {
  children: PropTypes.node,
  handleSearching: PropTypes.func,
  preloaderActive: PropTypes.bool,
  noResults: PropTypes.bool,
  noResultsSearchQuery: PropTypes.string
};

ListTemplate.defaultProps = {
  children: null,
  handleSearching: () => {},
  preloaderActive: false,
  noResults: false,
  noResultsSearchQuery: ''
};

export default ListTemplate;
