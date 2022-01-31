import { useEffect } from "react";
import messageService from "../../../services/messages";

const Messages = () => {
  useEffect(() => {
    messageService.getMessages();
  }, []);
  return (
    <div></div>
    );
}

export default Messages;
