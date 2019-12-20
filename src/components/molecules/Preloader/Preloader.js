import React from 'react';
import Spinner from 'components/atoms/Spinner/Spinner';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledParagraph = styled(Paragraph)`
  margin-top: 20px;
`;

const Preloader = ({ message }) => (
  <StyledWrapper>
    <Spinner />
    <StyledParagraph>{message}</StyledParagraph>
  </StyledWrapper>
);

Preloader.propTypes = {
  message: PropTypes.string
};

Preloader.defaultProps = {
  message: 'Wait for data download...'
};

export default Preloader;
