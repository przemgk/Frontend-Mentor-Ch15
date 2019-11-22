import styled from 'styled-components';
import PropTypes from 'prop-types';

const FlagBox = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

FlagBox.propTypes = {
  url: PropTypes.string.isRequired
};

export default FlagBox;
