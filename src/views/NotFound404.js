import React from 'react';
import ModalTemplate from 'templates/ModalTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import styled from 'styled-components';
import ArrowIcon from 'assets/icon-arrow.svg';
import { Link } from 'react-router-dom';

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

const NotFound404 = () => (
  <ModalTemplate messageBgCode="404">
    <StyledHeading>404</StyledHeading>
    <Heading as="h2">Page not found</Heading>
    <StyledParagraph pageType="home">
      The link you clicked may be broken or the page may have removed or renamed.
    </StyledParagraph>
    <Button as={Link} to="/" hideShadow icon={ArrowIcon}>
      Go to home page
    </Button>
  </ModalTemplate>
);

export default NotFound404;
