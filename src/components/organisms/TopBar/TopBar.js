import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import MoonIcon from 'assets/icon-moon.svg';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 24px 10%;
  box-shadow: 0 2px 8px -3px ${({ theme }) => theme.shadowColor};
`;

const TopBar = () => (
  <StyledWrapper>
    <Heading>Where in the world?</Heading>
    <Button icon={MoonIcon} hideShadow>
      Dark mode
    </Button>
  </StyledWrapper>
);

export default TopBar;
