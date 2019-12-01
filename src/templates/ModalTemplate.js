import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 35vw;
  min-height: 50vh;
  padding: 40px;
  border-radius: 6px;
  box-shadow: 0 0 8px -3px ${({ theme }) => theme.shadowColor};
  background-color: ${({ theme }) => theme.elementBgColor};
`;

const ModalTemplate = ({ children }) => <StyledWrapper>{children}</StyledWrapper>;

ModalTemplate.propTypes = {
  children: PropTypes.node.isRequired
};

export default ModalTemplate;
