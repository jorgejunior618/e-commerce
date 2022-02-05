import styled from "styled-components";

export const PageContainer = styled.section`
  padding-top: 15px;
`;

export const InputLabelSection = styled.section`
  display: flex;
  align-items: center;
  margin-top: 15px;

  input {
    margin-left: 15px;
  }
`;

export const ButtonsGroup = styled.section`
  display: flex;
  align-items: center;
  margin-top: 15px;

  button + button {
    margin-left: 15px;
  }

  #cancel {
    background-color: ${({ theme }) => theme.colors.error}
  }
`;