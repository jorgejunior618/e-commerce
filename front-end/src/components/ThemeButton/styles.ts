import styled from "styled-components";

export const ThemeButtonContainer = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  background: ${({ theme }) => theme.colors.backgroundInverted};
  border: none;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  position: absolute;
  top: calc(6vh - 25px);
  right: 20px;
  z-index: 10000;

  transition-duration: .4s;

  &:hover {
    opacity: 0.8;
  }
  
  &:disabled {
    opacity: 0.4;
  }
`;