import styled from 'styled-components';

const FlagBox = styled.div.attrs(({ url }) => ({
  style: {
    backgroundImage: `url(${url})`
  }
}))`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export default FlagBox;
