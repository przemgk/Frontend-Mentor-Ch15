import styled from 'styled-components';
import PropTypes from 'prop-types';

const Strong = styled.strong`
  font-size: ${({ theme, pageType }) => theme.fontSize.r[pageType]};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

Strong.propTypes = {
  pageType: PropTypes.oneOf(['home', 'details']).isRequired
};

export default Strong;
