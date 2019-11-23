import styled, { css } from 'styled-components';

const Heading = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.l};
  margin: 0;

  ${({ small }) =>
    small &&
    css`
      font-size: ${({ theme }) => theme.fontSize.m};
      font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    `}

  ${({ large }) =>
    large &&
    css`
      font-size: ${({ theme }) => theme.fontSize.xl};
    `}
`;

export default Heading;
