import React from 'react';
import MenuBarTemplate from 'templates/MenuBarTemplate';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FilterBar from 'components/organisms/FilterBar/FilterBar';
import Preloader from 'components/molecules/Preloader/Preloader';

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

const ListTemplate = ({ children, handleSearching, preloaderActive }) => (
  <MenuBarTemplate>
    <FilterBar handleSearching={handleSearching} />
    {!preloaderActive ? <StyledGrid>{children}</StyledGrid> : <Preloader />}
  </MenuBarTemplate>
);

ListTemplate.propTypes = {
  children: PropTypes.node,
  handleSearching: PropTypes.func,
  preloaderActive: PropTypes.bool
};

ListTemplate.defaultProps = {
  children: null,
  handleSearching: () => {},
  preloaderActive: false
};

export default ListTemplate;
