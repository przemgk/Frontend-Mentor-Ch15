import React from 'react';
import styled from 'styled-components';
import SearchInput from 'components/atoms/SearchInput/SearchInput';
import Dropdown from 'components/atoms/Dropdown/Dropdown';

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 10%;
`;

const StyledSearchInput = styled(SearchInput)`
  justify-self: start;
`;

const FilterBar = () => (
  <StyledWrapper>
    <StyledSearchInput placeholder="Search for a country..." />
    <Dropdown
      label="Filter by Region"
      options={['Africa', 'America', 'Asia', 'Europe', 'Oceania']}
    />
  </StyledWrapper>
);

export default FilterBar;
