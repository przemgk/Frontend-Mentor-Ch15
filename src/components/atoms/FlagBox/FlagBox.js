import styled from 'styled-components';

const FlagBox = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export default FlagBox;
