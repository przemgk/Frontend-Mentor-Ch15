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
    const { type, label, value } = this.props;
    const { redirect, url } = this.state;

    if (redirect) {
      return <Redirect to={url} />;
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
        {value.map(({ name, url: countryUrl }) => (
          <StyledButton small onClick={() => this.handleRedirect(countryUrl)} key={name}>
            {name}
          </StyledButton>
        ))}
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
