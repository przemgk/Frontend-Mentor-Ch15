import styled from 'styled-components';
import SearchIcon from 'assets/icon-search.svg';

const SearchInput = styled.input.attrs(() => ({
  type: 'search'
}))`
  display: inline-block;
  position: relative;
  font-size: ${({ theme }) => theme.fontSize.r.home};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  width: 100%;
  max-width: 500px;
  padding: 16px 24px 16px 52px;
  border: 0;
  border-radius: 6px;
  box-shadow: 0 0 8px -3px ${({ theme }) => theme.shadowColor};
  background-image: url(${SearchIcon});
  background-repeat: no-repeat;
  background-size: 16px auto;
  background-position: 24px 50%;

  &::placeholder {
    color: ${({ theme }) => theme.fontColor.tertiary};
  }
`;

export default SearchInput;
