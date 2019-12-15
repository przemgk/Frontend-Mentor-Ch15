import React, { Component } from 'react';
import ModalTemplate from 'templates/ModalTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import styled, { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { routes } from 'routes';

const StyledHeading = styled(Heading)`
  display: block;
  font-size: 6.4rem;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.fontColor.tertiary};
`;

const StyledParagraph = styled(Paragraph)`
  width: 100%;
  margin: 12px 0 64px;
  text-align: center;

  @media screen and (min-width: 800px) {
    width: 80%;
  }

  @media screen and (min-width: 1024px) {
    width: 60%;
  }
`;

class NotFound404 extends Component {
  state = { redirect: false };

  handleRedirect = () => this.setState({ redirect: true });

  render() {
    const { redirect } = this.state;
    const {
      theme: { icons }
    } = this.props;

    if (redirect) {
      return <Redirect to={routes.home} />;
    }

    return (
      <ModalTemplate messageBgCode="404">
        <StyledHeading>404</StyledHeading>
        <Heading as="h2">Page not found</Heading>
        <StyledParagraph>
          The link you clicked may be broken or the page may have removed or renamed.
        </StyledParagraph>
        <Button onClick={this.handleRedirect} hideShadow icon={icons.arrow}>
          Go to home page
        </Button>
      </ModalTemplate>
    );
  }
}

NotFound404.propTypes = {
  theme: PropTypes.shape({
    icons: PropTypes.objectOf(PropTypes.string).isRequired
  }).isRequired
};

export default withTheme(NotFound404);
