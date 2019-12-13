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

  @media screen and (min-width: 768px) {
    max-width: 420px;
    max-height: 300px;
  }

  @media screen and (min-width: 1366px) {
    max-width: 560px;
    max-height: 400px;
  }
`;

export default FlagBox;
