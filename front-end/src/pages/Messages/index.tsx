import { FormEvent, useCallback, useEffect, useState } from "react";
import { FaUndoAlt } from 'react-icons/fa';
import Message from "../../models/Message";
import messageService from "../../services/messages";
import { MessageItem, MessagesList, PageWrapper, PostDate, QuoteEmail, Text } from "./styles";
import Button from "../../components/Button";
import { formatDate } from "../../utils/stringHelper";
import { Link } from "react-router-dom";
import { TextArea } from "../../components/Input";
import { Alert, Slide, Snackbar } from "@mui/material";
import HttpException from "../../models/HttpException";

type MessageProps = {
  isUserLogged: boolean,
}

const Messages = ({ isUserLogged }: MessageProps) => {
  const [messages, setMessages] = useState<Message[]>([]);

  const [ newMessageText, setMessageText ] = useState('');
  
  const [ showAlert, setShowAlert ]= useState(false);
  const [ successAlert, setSuccessAlert ]= useState(false);
  const [ messageAlert, setMessageAlert ]= useState('');

  const handleCloseAlert = useCallback((reason: any) => {
    if (reason !== 'clickaway') setShowAlert(false);
  }, []);

  const handleOpenAlert = useCallback((success = true, message = 'Sucesso') => {
    setSuccessAlert(success);
    setMessageAlert(message);
    setShowAlert(true);
  }, []);

  
  const updateMessages = useCallback(async () => {
    try {
      const messagesLoaded = await messageService.getMessages();
      setMessages(messagesLoaded.messages);
    } catch (error) {
      if(error instanceof HttpException) {
        if (error.statuscode === 401) {
          return handleOpenAlert(false, 'Fazer login para tentar novamente');
        }
      }
      handleOpenAlert(false, 'Erro de conexão, tente novamente');
    }
  }, [handleOpenAlert]);

  const createMessage = useCallback(async () => {
    if(!newMessageText || newMessageText.length < 4) {
      return handleOpenAlert(false, 'Favor escrever ema mensagem maior');
    }
    try {
      await messageService.createMessage(newMessageText);
      handleOpenAlert(true, 'Menssagem enviada com sucesso');
      setTimeout(() => {
        setMessageText('');
        updateMessages();
      }, 500)
    } catch (error) {
      if(error instanceof HttpException) {
        if (error.statuscode === 401) {
          return handleOpenAlert(false, 'Fazer login para tentar novamente');
        }
      }
      handleOpenAlert(false, 'Erro de conexão, tente novamente');
    }
  }, [handleOpenAlert, newMessageText, updateMessages]);

  useEffect(() => {
    updateMessages();
  }, [updateMessages]);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    createMessage();
  }

  function TransitionDown(props: any) {
    return <Slide {...props} direction="down" />;
  }


  return (
    <PageWrapper className="container">
      <Snackbar
        open={showAlert}
        autoHideDuration={5000}
        onClose={(event, reason) => handleCloseAlert(reason)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        TransitionComponent={TransitionDown}
      >
        <Alert 
          onClose={handleCloseAlert} 
          variant="filled"
          severity={successAlert ? "success" : "error" }
          sx={{ width: '100%' }}
        >
          {messageAlert}
        </Alert>
      </Snackbar>
      <header>
        <h2>
          Mensagens do Aplicativo<FaUndoAlt onClick={updateMessages} />
        </h2>
        {isUserLogged ?
          <a href="#comentar">
            <Button >Adicionar comentário</Button>
          </a>
          :<Link to="/login"><Button>
            Fazer Login para deixar comentário
          </Button></Link>
        }
      </header>

      <MessagesList>
        {messages.map((message) => {
          return (
            <MessageItem key={message.id}>
              <h3>
                {message.user?.name ?? 'anonimo'} 
                <QuoteEmail>{message.user?.email ?? 'anonimo'}</QuoteEmail>
              </h3>
              <PostDate>{formatDate(message.postDate)}</PostDate>
              <Text>{message.message}</Text>
            </MessageItem>
          )
        })}
      </MessagesList>
      
      {isUserLogged ?
        <form id="comentar" action="submit" onSubmit={(e) => onSubmit(e)}>
          <h2>Adicionar comentário</h2>
          <TextArea
            name="message"
            placeholder="Escreva seu comentário e nos ajude a melhorar : )"
            required
            value={newMessageText}
            onChange={(event) => setMessageText(event.target.value)}
          />

          <Button type="submit">Comentar</Button>
        </form>
        : <></>
      }
    </PageWrapper>
    );
}

export default Messages;
