import styled, { css } from 'styled-components';

const Button = styled.button`
  display: inline-block;
  position: relative;
  padding: 12px 16px;
  border: 0;
  border-radius: 6px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.fontColor.primary};
  text-decoration: none;
  background-color: ${({ theme }) => theme.elementBgColor};
  box-shadow: 0 0 12px -4px ${({ theme }) => theme.shadowColor};
  cursor: pointer;
  outline: none;

  @media screen and (min-width: 768px) {
    padding: 12px 24px;
  }

  &:hover::after {
    opacity: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 6px;
    box-shadow: 0 0 12px 0 ${({ theme }) => theme.shadowColor};
    opacity: 0;
    transition: opacity 0.3s ease-in;
  }

  ${({ small }) =>
    small &&
    css`
      padding: 8px 12px;
      box-shadow: 0 0 8px -3px ${({ theme }) => theme.shadowColor};

      &::after {
        box-shadow: inset 0 0 0 2px ${({ theme }) => theme.shadowColor};
      }

      @media screen and (min-width: 768px) {
        padding: 8px 16px;
      }
    `}

  ${({ hideShadow }) =>
    hideShadow &&
    css`
      font-weight: ${({ theme }) => theme.fontWeight.semiBold};
      box-shadow: unset;
      background-color: transparent;

      &:hover::after {
        transform: scaleX(1);
        opacity: 1;
      }

      &::after {
        background-color: ${({ theme }) => theme.fontColor.primary};
        top: unset;
        bottom: 0;
        height: 2px;
        box-shadow: unset;
        transform: scaleX(0);
        opacity: 0;
        transition: opacity 0.3s ease-in, transform 0.3s ease-in;
      }
    `}

  ${({ icon }) =>
    icon &&
    css`
      padding: 12px 16px 12px 48px;
      background-image: url(${icon});
      background-size: 16px auto;
      background-repeat: no-repeat;
      background-position: 16px 50%;

      @media screen and (min-width: 768px) {
        padding: 12px 24px 12px 52px;
        background-position: 24px 50%;
      }
    `}
`;

export default Button;
