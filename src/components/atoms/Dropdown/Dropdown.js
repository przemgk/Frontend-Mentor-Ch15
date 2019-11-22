import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ArrowHeadIcon from 'assets/icon-arrowhead.svg';

const StyledWrapper = styled.div`
  display: block;
  width: 200px;
  position: relative;
`;

const StyledLabel = styled.span`
  display: block;
  position: relative;
  padding: 16px 44px 16px 24px;
  margin-bottom: 4px;
  border-radius: 6px;
  box-shadow: 0 0 8px -3px ${({ theme }) => theme.shadowsColor};
  cursor: pointer;
  z-index: 2;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 24px;
    width: 8px;
    height: 8px;
    background-image: url(${ArrowHeadIcon});
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
  margin: 0;
  padding: 0;
  list-style: none;
  border-radius: 6px;
  box-shadow: 0 0 8px -3px ${({ theme }) => theme.shadowsColor};
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
  padding: 16px 24px 0px;
  cursor: pointer;

  &:first-of-type {
    padding-top: 20px;
  }

  &:last-of-type {
    padding-bottom: 20px;
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
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleDropdownRollKey);
    document.removeEventListener('mousedown', this.handleDropdownRollMouse);
  }

  handleDropdownRollMouse = e =>
    !e.path.includes(this.references.current) && this.setState({ isActive: false });

  handleDropdownRollKey = e => e.key === 'Escape' && this.setState({ isActive: false });

  handleDropdownUnroll = () =>
    this.setState({
      isActive: true
    });

  handleChooseItem = e => this.setState({ isActive: false, chosenElement: e.target.textContent });

  render() {
    const { options, label } = this.props;
    const { isActive, chosenElement } = this.state;

    return (
      <StyledWrapper ref={this.references} className={isActive && 'active'}>
        <StyledLabel onClick={this.handleDropdownUnroll}>
          {chosenElement === '' ? label : chosenElement}
        </StyledLabel>
        <StyledList>
          {options.map(item => (
            <StyledItem key={item} onClick={this.handleChooseItem}>
              {item}
            </StyledItem>
          ))}
        </StyledList>
      </StyledWrapper>
    );
  }
}

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Dropdown;
