import styled from "styled-components";

export const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  padding: 8px 15px;
  border: solid 1px ${({ theme }) => theme.colors.backgroundInverted};
  border-radius: 4px;
  flex: auto;
  
  &:disabled {
    background-color: ${({ theme }) => theme.colors.backgroundInverted};
  }
`;

export const StyledTextArea = styled.textarea`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  padding: 8px 15px;
  border: solid 1px ${({ theme }) => theme.colors.backgroundInverted};
  border-radius: 4px;
  flex: auto;
  resize: none;
    
  &:disabled {
    background-color: ${({ theme }) => theme.colors.backgroundInverted};
  }
`;