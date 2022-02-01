import styled from "styled-components";

export const FormWrapper = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  box-shadow: 0 2px .5em black;
  width: 50vw;
  padding: 25px 50px;

  header {
    margin-bottom: 15px;
  }

  input + input {
    margin-top: 15px;
  }
`;