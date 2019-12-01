import React, { Component } from 'react';
import ModalTemplate from 'templates/ModalTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import styled from 'styled-components';
import ArrowIcon from 'assets/icon-arrow.svg';
import { Redirect } from 'react-router-dom';
import { routes } from 'routes';

const StyledHeading = styled(Heading)`
  display: block;
  font-size: 6.4rem;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.fontColor.tertiary};
`;

const StyledParagraph = styled(Paragraph)`
  width: 60%;
  margin: 12px 0 64px;
  text-align: center;
`;

class NotFound404 extends Component {
  state = { redirect: false };

  handleRedirect = () => this.setState({ redirect: true });

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={routes.home} />;
    }

    return (
      <ModalTemplate messageBgCode="404">
        <StyledHeading>404</StyledHeading>
        <Heading as="h2">Page not found</Heading>
        <StyledParagraph pageType="home">
          The link you clicked may be broken or the page may have removed or renamed.
        </StyledParagraph>
        <Button onClick={this.handleRedirect} hideShadow icon={ArrowIcon}>
          Go to home page
        </Button>
      </ModalTemplate>
    );
  }
}

export default NotFound404;
