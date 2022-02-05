import { MouseEvent, useState } from "react";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import { PageContainer } from "./style";

function Login() {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleLogin = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    event.preventDefault();
    console.log({ email, password });
  }

  return (
    <PageContainer>
      <Form action="submit" formHeader="Login">
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

