import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import MoonIcon from 'assets/icon-moon.svg';
import { Link } from 'react-router-dom';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 24px 10%;
  box-shadow: 0 2px 8px -3px ${({ theme }) => theme.shadowColor};
  background-color: ${({ theme }) => theme.elementBgColor};
`;

const StyledHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.fontSize.m};
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const TopBar = () => (
  <StyledWrapper>
    <StyledHeading as="h1">
      <StyledLink to="/">Where in the world?</StyledLink>
    </StyledHeading>
    <Button icon={MoonIcon} hideShadow>
      Dark mode
    </Button>
  </StyledWrapper>
);

export default TopBar;
