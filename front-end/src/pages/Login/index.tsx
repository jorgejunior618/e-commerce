import { MouseEvent, useState } from "react";
import {
  Alert,
  Snackbar,
  Slide,
} from '@mui/material';

import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import { PageContainer } from "./style";

function Login() {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleLogin = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    event.preventDefault();
    if(!validateLogin()) {
      return;
    }
    console.log({ email, password });
  }

  const validateLogin = (): boolean => {
    if(email && password) {
      return true;
    }
    handleOpenAlert(false, "Preencha email e senha");
    return false;
  }

  const [ showAlert, setShowAlert ]= useState(false);
  const [ successAlert, setSuccessAlert ]= useState(false);
  const [ messageAlert, setMessageAlert ]= useState('');
  const handleCloseAlert = (reason: any) => {
    if (reason !== 'clickaway') setShowAlert(false);
  }

  const handleOpenAlert = (success = true, message = 'Sucesso') => {
    setSuccessAlert(success);
    setMessageAlert(message);
    setShowAlert(true);
  }

  function TransitionDown(props: any) {
    return <Slide {...props} direction="down" />;
  }

  return (
    <PageContainer>
      <Form action="submit" formHeader="Login">
      <Snackbar
        open={showAlert}
        autoHideDuration={5000000}
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

