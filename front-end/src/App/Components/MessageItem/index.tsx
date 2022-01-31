import { LiHTMLAttributes } from "react";
import styled from "styled-components";

const ListItem = styled.div`
margin: 12px auto;
background-color: red;
width: 80vw;
padding: 12px;
border-radius: 5px;
`;

function MessageItem({children}: LiHTMLAttributes<HTMLLIElement>) {
  return (
    <ListItem>
      {children}
    </ListItem>
  );
}

export default MessageItem;
