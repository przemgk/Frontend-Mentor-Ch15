import React from 'react';
import styled from 'styled-components';
import SearchInput from 'components/atoms/SearchInput/SearchInput';
import Dropdown from 'components/atoms/Dropdown/Dropdown';

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 40px 24px 64px;

  @media screen and (min-width: 768px) {
    padding: 40px 10%;
    flex-direction: row;
    align-items: center;
  }
`;

const StyledSearchInput = styled(SearchInput)`
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const FilterBar = () => (
  <StyledWrapper>
    <StyledSearchInput placeholder="Search for a country..." />
    <Dropdown
      label="Filter by Region"
      options={['africa', 'americas', 'asia', 'europe', 'oceania']}
    />
  </StyledWrapper>
);

export default FilterBar;
