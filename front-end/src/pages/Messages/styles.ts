import styled from "styled-components";

export const PageWrapper = styled.section`
  padding-top: 20px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;

    h2 svg {
      margin-left: 25px;
      fill: ${({ theme }) => theme.colors.primary}
    }
  }

  .button {
    margin-top: 12px;
    margin-left: 0;
  }

  form {
    display: flex;
    flex-direction: column;
  }
`;

export const MessagesList = styled.ul`
  max-height: 70vh;
  overflow: scroll;
`;

export const MessageItem = styled.div`
  margin-bottom: 12px;
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
  margin-left: 15px;
`;

export const PostDate = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  font-style: italic;
  font-weight: 400;
  margin-top: 15px;
`;


export const Text = styled.p`
  margin-top: 12px;
`;


