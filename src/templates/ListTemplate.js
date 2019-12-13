import React from 'react';
import MenuBarTemplate from 'templates/MenuBarTemplate';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FilterBar from 'components/organisms/FilterBar/FilterBar';

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 64px;
  width: 100%;
  padding: 0 10%;
`;

const ListTemplate = ({ children }) => (
  <MenuBarTemplate>
    <FilterBar />
    <StyledGrid>{children}</StyledGrid>
  </MenuBarTemplate>
);

ListTemplate.propTypes = {
  children: PropTypes.node.isRequired
};

export default ListTemplate;
