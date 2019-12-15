import React, { Component } from 'react';
import styled from 'styled-components';
import Strong from 'components/atoms/Strong/Strong';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const StyledHeading = styled(Heading)`
  margin-bottom: 16px;
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
    const { type, label } = this.props;
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
        <div>
          <Strong>{label}: </Strong>
          <Paragraph>{value}</Paragraph>
        </div>
      );
    }

    return (
      <div>
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
          <Paragraph>Does not border with any country</Paragraph>
        )}
      </div>
    );
  }
}

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
