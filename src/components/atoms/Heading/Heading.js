import styled, { css } from 'styled-components';

const Heading = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.xl};

  ${({ small }) =>
    small &&
    css`
      font-size: ${({ theme }) => theme.fontSize.m};
    `}

  ${({ large }) =>
    large &&
    css`
      font-size: ${({ theme }) => theme.fontSize.xll};
    `}
`;

export default Heading;
