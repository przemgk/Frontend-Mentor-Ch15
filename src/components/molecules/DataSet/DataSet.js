import React from 'react';
import styled from 'styled-components';
import Strong from 'components/atoms/Strong/Strong';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import PropTypes from 'prop-types';

const StyledHeading = styled(Heading)`
  margin-bottom: 16px;
`;

const StyledButton = styled(Button)`
  margin: 0 12px 12px 0;

  &:last-of-type {
    margin-right: 0;
  }
`;

const DataSet = ({ type, label, value }) => (
  <div>
    {type === 'text' && (
      <>
        <Strong>{label}: </Strong>
        <Paragraph>{value}</Paragraph>
      </>
    )}

    {type === 'buttons' && (
      <>
        <StyledHeading as="h3" small>
          {`${label}: `}
        </StyledHeading>
        {value.map(item => (
          <StyledButton small key={item.name}>
            {item.name}
          </StyledButton>
        ))}
      </>
    )}
  </div>
);

DataSet.propTypes = {
  type: PropTypes.oneOf(['text', 'buttons']).isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
      })
    )
  ]).isRequired
};

export default DataSet;
