import styled from 'styled-components';
import PropTypes from 'prop-types';

const Paragraph = styled.p`
  display: inline-block;
  font-size: ${({ theme, pageType }) => theme.fontSize.r[pageType]};
  line-height: 1.6;
  margin: 0;
`;

Paragraph.propTypes = {
  pageType: PropTypes.oneOf(['home', 'details']).isRequired
};

export default Paragraph;
