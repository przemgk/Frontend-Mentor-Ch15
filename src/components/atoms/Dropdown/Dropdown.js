import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  display: block;
  width: 200px;
  position: relative;
`;

const StyledLabel = styled.span`
  display: block;
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

const StyledItem = styled.li`
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

class Dropdown extends Component {
  state = {
    isActive: false,
    chosenElement: ''
  };

  references = React.createRef();

  componentDidMount() {
    document.addEventListener('keydown', this.handleDropdownRollKey);
    document.addEventListener('mousedown', this.handleDropdownRollMouse);

    this.setCurrentOption();
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleDropdownRollKey);
    document.removeEventListener('mousedown', this.handleDropdownRollMouse);
  }

  handleDropdownRollMouse = e =>
    !e.path.includes(this.references.current) && this.setState({ isActive: false });

  handleDropdownRollKey = e => e.key === 'Escape' && this.setState({ isActive: false });

  handleDropdown = () =>
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }));

  handleChooseItem = e => this.setState({ isActive: false, chosenElement: e.target.textContent });

  setCurrentOption = () => {
    const {
      options,
      location: { pathname }
    } = this.props;

    const [currentOption] = options.filter(option => option.toLowerCase() === pathname.substr(1));

    if (currentOption) {
      this.setState({ chosenElement: currentOption });
    }
  };

  render() {
    const { options, label } = this.props;
    const { isActive, chosenElement } = this.state;

    return (
      <StyledWrapper ref={this.references} className={isActive && 'active'}>
        <StyledLabel onClick={this.handleDropdown}>
          {chosenElement === '' ? label : chosenElement}
        </StyledLabel>
        <StyledList>
          {options.map(option => (
            <StyledItem
              as={Link}
              to={`/${option.toLowerCase()}`}
              key={option}
              onClick={this.handleChooseItem}
            >
              {option}
            </StyledItem>
          ))}
        </StyledList>
      </StyledWrapper>
    );
  }
}

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default withRouter(Dropdown);
