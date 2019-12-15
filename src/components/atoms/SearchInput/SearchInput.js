import styled from 'styled-components';

const SearchInput = styled.input.attrs(() => ({
  type: 'search'
}))`
  display: inline-block;
  position: relative;
  font-size: ${({ theme }) => theme.fontSize.r.home};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.fontColor.primary};
  width: 100%;
  max-width: 500px;
  padding: 16px 24px 16px 52px;
  border: 0;
  border-radius: 6px;
  box-shadow: 0 0 8px -3px ${({ theme }) => theme.shadowColor};
  background-color: ${({ theme }) => theme.elementBgColor};
  background-image: url(${({ theme }) => theme.icons.search});
  background-repeat: no-repeat;
  background-size: 16px auto;
  background-position: 24px 50%;

  &::placeholder {
    color: ${({ theme }) => theme.fontColor.tertiary};
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    max-width: 350px;
  }
`;

export default SearchInput;
