import React, { Component } from 'react';
import styled from 'styled-components';
import Strong from 'components/atoms/Strong/Strong';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

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

class DataSet extends Component {
  state = { redirect: false, url: '' };

  handleRedirect = url => this.setState({ redirect: true, url });

  render() {
    const { type, label, nullMessage } = this.props;
    let { value } = this.props;
    const { redirect, url } = this.state;

    if (redirect) {
      return <Redirect to={url} />;
    }

    if (!value) {
      value = 'Unidentified';
    } else if (typeof value === 'number') {
      value = value.toLocaleString('en-US', { useGrouping: true });
    }

    if (type === 'text') {
      return (
        <StyledDataSet>
          <Strong>{label}: </Strong>
          <Paragraph>{value}</Paragraph>
        </StyledDataSet>
      );
    }

    return (
      <StyledDataSet>
        <StyledHeading as="h3" small>
          {`${label}: `}
        </StyledHeading>
        {value.length > 0 ? (
          value.map(({ name, url: countryUrl }) => (
            <StyledButton small onClick={() => this.handleRedirect(countryUrl)} key={name}>
              {name}
            </StyledButton>
          ))
        ) : (
          <Paragraph>{nullMessage}</Paragraph>
        )}
      </StyledDataSet>
    );
  }
}

DataSet.propTypes = {
  type: PropTypes.oneOf(['text', 'buttons']).isRequired,
  label: PropTypes.string.isRequired,
  nullMessage: PropTypes.string.isRequired,
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
