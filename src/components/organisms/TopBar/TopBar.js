import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import { toogleThemeAction } from 'actions';
import { StoreContext } from 'store';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 24px;
  box-shadow: 0 2px 8px -3px ${({ theme }) => theme.shadowColor};
  background-color: ${({ theme }) => theme.elementBgColor};

  @media screen and (min-width: 768px) {
    padding: 24px 10%;
  }
`;

const StyledHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.fontSize.r.details};

  @media only screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const TopBar = () => {
  const [, dispatch] = useContext(StoreContext);
  const { icons } = useContext(ThemeContext);

  return (
    <StyledWrapper>
      <StyledHeading as="h1">
        <StyledLink to={routes.home}>Where in the world?</StyledLink>
      </StyledHeading>
      <Button onClick={() => toogleThemeAction(dispatch)} icon={icons.moon} hideShadow>
        Dark mode
      </Button>
    </StyledWrapper>
  );
};

export default TopBar;
