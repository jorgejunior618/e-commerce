import { MouseEvent, useCallback, useState } from "react";
import {
  Alert,
  Snackbar,
  Slide,
} from '@mui/material';

import profileService from "../../services/profile";

import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import { PageContainer } from "./style";
import HttpException from "../../models/HttpException";
import { isLogged, setSession } from "../../utils/http";
import { useNavigate } from "react-router-dom";

function Login() {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  
  const [ showAlert, setShowAlert ]= useState(false);
  const [ successAlert, setSuccessAlert ]= useState(false);
  const [ messageAlert, setMessageAlert ]= useState('');

  const navigateTo = useNavigate();
  
  const handleCloseAlert = useCallback((reason: any) => {
    if (reason !== 'clickaway') setShowAlert(false);
  }, []);

  const handleOpenAlert = useCallback((success = true, message = 'Sucesso') => {
    setSuccessAlert(success);
    setMessageAlert(message);
    setShowAlert(true);
  }, []);

  
  const validateLogin = useCallback((): boolean => {
    if(email && password) {
      return true;
    }
    handleOpenAlert(false, "Preencha email e senha");
    return false;
  }, [email, password, handleOpenAlert]);

  const handleLogin = useCallback(async (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    event.preventDefault();
    if(!validateLogin()) {
      return;
    }

    try {
      const response = await profileService.login({ email, password });
      console.log(response);

      setSession(response);
      setTimeout(() => {
        const logged = isLogged();
        if(logged) {
          navigateTo('/profile')
        }
      }, 500)
    } catch(error) {
      if(error instanceof HttpException) {
        console.log(error.statuscode);
        
        if (error.statuscode === 401) {
          return handleOpenAlert(false, 'E-mail ou senha inválidos');
        }
      }
      handleOpenAlert(false, 'Erro de conexão, tente novamente');
    }

    
  }, [email, password, validateLogin, handleOpenAlert, navigateTo]);

  function TransitionDown(props: any) {
    return <Slide {...props} direction="down" />;
  }

  return (
    <PageContainer>
      <Form action="submit" formHeader="Login">
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
        <Input
          name="email"
          placeholder="Insira seu e-mail"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <Input
          name="password"
          placeholder="Insira sua senha"
          type="password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <Button onClick={handleLogin}>
          Entrar
        </Button>
      </Form>
    </PageContainer>
  );
}

export default Login;

