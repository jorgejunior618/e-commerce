import { FormEvent, useCallback, useState } from "react";
import {
  Alert,
  Snackbar,
  Slide,
} from '@mui/material';

import profileService from '../../services/profile';

import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import { PageContainer } from "./styles";
import HttpException from "../../models/HttpException";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [ email, setEmail ] = useState('');
  const [ name, setName ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ confirmPassword, setConfirmPassword ] = useState('');

  const navigateTo = useNavigate();
  
  const [ showAlert, setShowAlert ] = useState(false);
  const [ successAlert, setSuccessAlert ] = useState(false);
  const [ messageAlert, setMessageAlert ] = useState('');

  const handleOpenAlert = useCallback((success = true, message = 'Sucesso') => {
    setSuccessAlert(success);
    setMessageAlert(message);
    setShowAlert(true);
  }, []);


  const handleCloseAlert =useCallback( (reason: any) => {
    if (reason !== 'clickaway') setShowAlert(false);
  }, []);
  
  const validateForm = useCallback((): boolean => {
    if(email && password && name && confirmPassword) {
      if (password === confirmPassword) {
        console.log({password, confirmPassword});
        
       return true;
      }
      handleOpenAlert(false, "Confirmação de senha diferente da senha");
      return false;
    }
    handleOpenAlert(false, "Preencha todos os campos");
    return false;
  }, [email, name, password, confirmPassword, handleOpenAlert]);

  const handleSignUp = useCallback(async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(!validateForm()) {
      return;
    }
    
    try {
      await profileService.createProfile(email, name, password);
      handleOpenAlert(true, 'Perfil criado com sucesso, redirecionando para Login');
      setTimeout(() => {
        navigateTo('/login');
      }, 5000)
    } catch (error) {
      if(error instanceof HttpException) {
        console.log(error.statuscode);
        
        if (error.statuscode === 401) {
          return handleOpenAlert(false, 'E-mail ja em uso');
        }
      }
      handleOpenAlert(false, 'Erro de conexão, tente novamente');
    }
  }, [email, name, password, validateForm, handleOpenAlert, navigateTo]);
  

  function TransitionDown(props: any) {
    return <Slide {...props} direction="down" />;
  }

  return (
    <PageContainer>

      <Form action="submit" onSubmit={handleSignUp} formHeader="Cadastre-se">
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
          name="name"
          placeholder="Como deseja ser chamado"
          type="text"
          required={true}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <Input
          name="password"
          placeholder="Crie uma senha"
          type="password"
          required={true}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <Input
          name="confirmPassword"
          placeholder="Crie uma senha"
          type="password"
          required={true}
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </Form>
    </PageContainer>
  );
}

export default SignUp;

