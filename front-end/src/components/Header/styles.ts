import styled from "styled-components";

export const HeaderWrapper = styled.header`
  height: 15vh;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonsWrapper =  styled.nav`
  display: flex;
  align-items: center;
`;
