import { FormEvent, useCallback, useState } from "react";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { PageContainer } from "./style";

function SignUp() {
  const [ email, setEmail ] = useState('');
  const [ name, setName ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ confirmPassword, setConfirmPassword ] = useState('');

  const handleSignUp = useCallback((event: FormEvent<HTMLFormElement>) => {
    console.log({ email, name, password, confirmPassword });
  }, [email, name, password, confirmPassword])

  return (
    <>
      <Header />
      
      <PageContainer className="container">

        <Form action="submit" onSubmit={handleSignUp} formHeader="Cadastre-se">
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
    </>
  );
}

export default SignUp;

