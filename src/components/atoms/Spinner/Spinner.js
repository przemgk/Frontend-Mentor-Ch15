import styled, { keyframes } from 'styled-components';

const SpinnerAnimation = keyframes`
  0% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(45deg) scale(1.2); }
  100% { transform: rotate(360deg) scale(1); }
`;

const Spinner = styled.div`
  display: inline-block;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  position: relative;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px solid transparent;
    border-top-color: ${({ theme }) => theme.fontColor.primary};
    border-bottom-color: ${({ theme }) => theme.fontColor.primary};
    animation: ${SpinnerAnimation} 1s linear infinite;
  }
`;

export default Spinner;
