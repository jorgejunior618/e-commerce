import styled from "styled-components";

export const PageWrapper = styled.main`
  padding-top: 20px;
  height: 85vh;

  .button {
    margin-top: 12px;
    margin-left: 0;
  }
`;

export const MessagesList = styled.ul`
  margin-top: 12px;
  height: 60vh;
  overflow: scroll;
`;

export const MessageItem = styled.div`
  margin-top: 12px;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  padding: 15px 30px;
  border-radius: 5px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundInverted};
  }
`;

export const QuoteEmail = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  font-style: italic;
  font-weight: 400;
`;

export const Text = styled.p`
  margin-top: 12px;
`;


