import React from 'react';
import styled from 'styled-components';
import SearchInput from 'components/atoms/SearchInput/SearchInput';
import Dropdown from 'components/atoms/Dropdown/Dropdown';

const StyledWrapper = styled.div`
  display: grid;
  justify-items: end;
  grid-template-columns: 3fr 1fr;
  grid-gap: 40px;
  width: 100%;
  padding: 24px 10%;
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
