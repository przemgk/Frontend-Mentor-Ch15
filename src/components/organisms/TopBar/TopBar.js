import React from 'react';
import styled, { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import withThemeContext from 'hoc/withThemeContext';

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

const TopBar = ({ themeContext: { handleThemeToggle }, theme: { icons } }) => (
  <StyledWrapper>
    <StyledHeading as="h1">
      <StyledLink to={routes.home}>Where in the world?</StyledLink>
    </StyledHeading>
    <Button onClick={handleThemeToggle} icon={icons.moon} hideShadow>
      Dark mode
    </Button>
  </StyledWrapper>
);

TopBar.propTypes = {
  themeContext: PropTypes.shape({
    handleThemeToggle: PropTypes.func.isRequired
  }),
  theme: PropTypes.shape({
    icons: PropTypes.objectOf(PropTypes.string).isRequired
  }).isRequired
};

TopBar.defaultProps = {
  themeContext: { handleThemeToggle() {} }
};

export default withTheme(withThemeContext(TopBar));
