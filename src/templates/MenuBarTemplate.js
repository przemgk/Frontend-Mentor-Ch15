import React from 'react';
import TopBar from 'components/organisms/TopBar/TopBar';
import PropTypes from 'prop-types';

const MenuBarTemplate = ({ children }) => (
  <>
    <TopBar />
    {children}
  </>
);

MenuBarTemplate.propTypes = {
  children: PropTypes.element.isRequired
};

export default MenuBarTemplate;
