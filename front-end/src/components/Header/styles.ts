import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonsWrapper =  styled.nav`
  display: flex;
  align-items: center;
`;
