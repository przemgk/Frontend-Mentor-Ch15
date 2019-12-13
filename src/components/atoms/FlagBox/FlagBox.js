import styled from 'styled-components';

const FlagBox = styled.div.attrs(({ url }) => ({
  style: {
    backgroundImage: `url(${url})`
  }
}))`
  width: 100%;
  height: 100%;
  max-width: 560px;
  max-height: 400px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export default FlagBox;
