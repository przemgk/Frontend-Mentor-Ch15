import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { routes } from 'routes';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  display: block;
  width: 200px;
  position: relative;
`;

const StyledLabel = styled.div`
  position: relative;
  padding: 16px 44px 16px 24px;
  border-radius: 6px;
  box-shadow: 0 0 8px -3px ${({ theme }) => theme.shadowColor};
  background-color: ${({ theme }) => theme.elementBgColor};
  cursor: pointer;
  z-index: 101;

  &::first-letter {
    text-transform: uppercase;
  }

  &:hover::before {
    opacity: 1;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 6px;
    box-shadow: 0 0 8px 0 ${({ theme }) => theme.shadowColor};
    opacity: 0;
    transition: opacity 0.3s ease-in;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 24px;
    width: 8px;
    height: 8px;
    background-image: url(${({ theme }) => theme.icons.arrowHead});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    transform: translateY(-50%);
    transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  ${StyledWrapper}.active &::after {
    transform: translateY(-50%) rotate(180deg);
  }
`;

const StyledList = styled.ul`
  position: absolute;
  left: 0;
  right: 0;
  margin: 4px 0 0 0;
  padding: 12px 0;
  list-style: none;
  border-radius: 6px;
  box-shadow: 0 0 8px -3px ${({ theme }) => theme.shadowColor};
  background-color: ${({ theme }) => theme.elementBgColor};
  z-index: 100;
  transform: scaleY(0);
  transform-origin: top center;
  opacity: 0;
  transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55),
    opacity 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  ${StyledWrapper}.active & {
    transform: scaleY(1);
    opacity: 1;
  }
`;

const StyledItem = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;
  position: relative;
  padding: 12px 24px;
  cursor: pointer;
  overflow: hidden;

  &::first-letter {
    text-transform: uppercase;
  }

  &:hover::after {
    opacity: 0.4;
    transform: translateY(-50%) scale(20);
    transition: opacity 0.2s ease-in, transform 0.4s ease-in;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 40px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.fontColor.tertiary};
    opacity: 0;
    transform: translateY(-50%);
    transition: opacity 0.2s ease-in 0.2s, transform 0.4s ease-in;
    z-index: -1;
  }
`;

const Dropdown = ({ label, options }) => {
  const [chosenElement, setChosenElement] = useState('');
  const [isActive, setActive] = useState(false);
  const dropdownRef = useRef(null);
  const { pathname } = useLocation();

  const handleDropdownRollKey = e => e.key === 'Escape' && setActive(false);
  const handleDropdownRollMouse = e => !dropdownRef.current.contains(e.target) && setActive(false);

  useEffect(() => {
    const matchRegion = routes[pathname.slice(1)];

    setChosenElement(matchRegion ? matchRegion.slice(1) : '');
  }, [pathname]);

  useEffect(() => {
    document.addEventListener('keydown', handleDropdownRollKey);
    document.addEventListener('mousedown', handleDropdownRollMouse);

    return () => {
      document.removeEventListener('keydown', handleDropdownRollKey);
      document.removeEventListener('mousedown', handleDropdownRollMouse);
    };
  }, [dropdownRef]);

  return (
    <StyledWrapper ref={dropdownRef} className={isActive && 'active'}>
      <StyledLabel onClick={() => setActive(!isActive)}>
        {chosenElement === '' ? label : chosenElement}
      </StyledLabel>
      <StyledList>
        {options.map(option => (
          <li key={option}>
            <StyledItem to={`/${option.toLowerCase()}`} onClick={() => setActive(false)}>
              {option}
            </StyledItem>
          </li>
        ))}
      </StyledList>
    </StyledWrapper>
  );
};

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Dropdown;
