import styled from 'styled-components';
import SearchIcon from 'assets/icon-search.svg';

const SearchInput = styled.input.attrs(() => ({
  type: 'search'
}))`
  font-size: ${({ theme }) => theme.fontSize.r.home};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  width: 100%;
  padding: 16px 24px 16px 52px;
  border: 0;
  border-radius: 6px;
  box-shadow: 0 4px 12px -4px ${({ theme }) => theme.shadowsColor};
  background-image: url(${SearchIcon});
  background-repeat: no-repeat;
  background-size: 16px auto;
  background-position: 24px 50%;

  &::placeholder {
    color: ${({ theme }) => theme.fontColor.tertiary};
  }
`;

export default SearchInput;
