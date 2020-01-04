import React from 'react';
import ModalTemplate from 'templates/ModalTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { routes } from 'routes';

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

const ConnectionFailed = () => {
  const history = useHistory();

  return (
    <ModalTemplate messageBgCode="404">
      <Heading as="h2">Connection Failed!</Heading>
      <StyledParagraph>
        An error has occurred, please check your connection and try again later.
      </StyledParagraph>
      <Button onClick={() => history.push(routes.home)} hideShadow>
        Try again
      </Button>
    </ModalTemplate>
  );
};

ConnectionFailed.propTypes = {
  theme: PropTypes.shape({
    icons: PropTypes.objectOf(PropTypes.string).isRequired
  }).isRequired
};

export default ConnectionFailed;
