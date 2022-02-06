import { FormEvent, useCallback, useState } from "react";
import {
  Alert,
  Snackbar,
  Slide,
} from '@mui/material';

import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import { PageContainer } from "./styles";

function SignUp() {
  const [ email, setEmail ] = useState('');
  const [ name, setName ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ confirmPassword, setConfirmPassword ] = useState('');
  
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
       return true;
      }
      handleOpenAlert(false, "Confirmação de senha diferente da senha");
      return false;
    }
    handleOpenAlert(false, "Preencha todos os campos");
    return false;
  }, [email, name, password, confirmPassword, handleOpenAlert]);

  const handleSignUp = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(!validateForm) {
      return;
    }
    
    console.log({ email, name, password, confirmPassword });
  }, [email, name, password, confirmPassword, validateForm]);
  

  function TransitionDown(props: any) {
    return <Slide {...props} direction="down" />;
  }

  return (
    <PageContainer>

      <Form action="submit" onSubmit={handleSignUp} formHeader="Cadastre-se">
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
          name="email"
          placeholder="E-mail"
          type="email"
          required={true}
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

