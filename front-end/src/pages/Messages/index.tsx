import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Message from "../../models/Message";
import messageService from "../../services/messages";
import MessageItem from "../../components/MessageItem";

const Messages = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  async function updateMessages() {
    const messagesLoaded = await messageService.getMessages();
    setMessages(messagesLoaded.messages);
  }

  useEffect(() => {
    updateMessages();
  }, []);

  return (
    <>
      <Link to="/">Voltar</Link>
      <h2>Mensagens do Aplicativo</h2>
      <ul>
        {messages.map((message) => {
          return (
            <MessageItem key={message.id}>{message.message}</MessageItem>
          )
        })}
      </ul>
    </>
    );
}

export default Messages;
