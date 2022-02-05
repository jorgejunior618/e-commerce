import { FormEvent, useEffect, useState } from "react";
import { FaUndoAlt } from 'react-icons/fa';
import Message from "../../models/Message";
import messageService from "../../services/messages";
import { MessageItem, MessagesList, PageWrapper, QuoteEmail, Text } from "./styles";
import { isLogged } from "../../utils/http";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const Messages = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const navigateTo = useNavigate();

  const logged = isLogged();

  async function updateMessages() {
    const messagesLoaded = await messageService.getMessages();
    setMessages(messagesLoaded.messages);
  }

  useEffect(() => {
    updateMessages();
  }, []);

  function onSubmit(event: FormEvent) {
    event.preventDefault();

    if(logged) {
      console.log('Publicando comentário ...');
    } else {
      alert('Você precisa estar na sua conta para adicionar mensagens');
      navigateTo('/login')
    }
  }

  return (
    <PageWrapper className="container">
      <header>
        <h2>
          Mensagens do Aplicativo<FaUndoAlt onClick={updateMessages} />
        </h2>

        <a href="#comentar">
          <Button >Adicionar comentário</Button>
        </a>
      </header>

      <MessagesList>
        {messages.map((message) => {
          return (
            <MessageItem key={message.id}>
              <h3>{message.user.name} <QuoteEmail>{message.user.email}</QuoteEmail></h3>
              <Text>{message.message}</Text>
            </MessageItem>
          )
        })}
      </MessagesList>

      <form  id="comentar" action="submit" onSubmit={(e) => onSubmit(e)}>
        <h2>Adicionar comentário</h2>
        <button type="submit" className="button">Comentar</button>
      </form>
    </PageWrapper>
    );
}

export default Messages;
