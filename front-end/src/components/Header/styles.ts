import styled from "styled-components";

export const HeaderWrapper = styled.header`
  height: 12vh;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10vw;
`;

export const ButtonsWrapper =  styled.nav`
  display: flex;
  align-items: center;
`;

export const Button =  styled.div`
  border-radius: 5px;
  padding: 8px 10px;
  margin-left: 15px;
  color: ${({ theme }) => theme.colors.background};
  background-color: ${({ theme }) => theme.colors.primary};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.tertiary};
  }
`;
