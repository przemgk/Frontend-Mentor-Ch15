import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 12px 24px;
  border: 0;
  border-radius: 6px;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.fontColor.primary};
  background-color: transparent;
  box-shadow: 0 0 12px -4px ${({ theme }) => theme.shadowsColor};

  ${({ small }) =>
    small &&
    css`
      padding: 8px 16px;
      box-shadow: 0 0 8px -3px ${({ theme }) => theme.shadowsColor};
    `}

  ${({ hideShadow }) =>
    hideShadow &&
    css`
      font-weight: ${({ theme }) => theme.fontWeight.regular};
      box-shadow: unset;
    `}

  ${({ icon }) =>
    icon &&
    css`
      padding: 12px 24px 12px 52px;
      background-image: url(${icon});
      background-size: 16px auto;
      background-repeat: no-repeat;
      background-position: 24px 50%;
    `}
`;

export default Button;
