import styled from "styled-components";

export const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  padding: 8px 15px;
  border: solid 1px ${({ theme }) => theme.colors.backgroundInverted};
  border-radius: 4px;
  flex: auto;

  &:disabled {
    opacity: .6;
  }
`;