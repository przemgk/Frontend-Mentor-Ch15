import React from 'react';
import styled from 'styled-components';
import Strong from 'components/atoms/Strong/Strong';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

export const StyledDataSet = styled.div``;

const StyledHeading = styled(Heading)`
  margin-bottom: 24px;
`;

const StyledButton = styled(Button)`
  margin: 0 12px 12px 0;

  &:last-of-type {
    margin-right: 0;
  }
`;

const DataSet = ({ type, label, nullMessage, value }) => {
  const history = useHistory();

  if (type === 'text') {
    let formatedValue = value;

    if (typeof formatedValue === 'number') {
      formatedValue = value.toLocaleString('en-US', { useGrouping: true });
    }

    return (
      <StyledDataSet>
        <Strong>{label}: </Strong>
        <Paragraph>{!formatedValue ? 'Unidentified' : formatedValue}</Paragraph>
      </StyledDataSet>
    );
  }

  return (
    <StyledDataSet>
      <StyledHeading as="h3" small>
        {`${label}: `}
      </StyledHeading>
      {value.length > 0 ? (
        value.map(({ name, url }) => (
          <StyledButton onClick={() => history.push(url)} small key={name}>
            {name}
          </StyledButton>
        ))
      ) : (
        <Paragraph>{nullMessage}</Paragraph>
      )}
    </StyledDataSet>
  );
};

DataSet.propTypes = {
  type: PropTypes.oneOf(['text', 'buttons']).isRequired,
  label: PropTypes.string.isRequired,
  nullMessage: PropTypes.string,
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

DataSet.defaultProps = {
  nullMessage: ''
};

export default DataSet;
