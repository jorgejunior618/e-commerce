import { MouseEvent, useState } from "react";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Header from "../../components/Header";
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
    <>
      <Header />
      
      <PageContainer className="container">

        <Form action="submit" formHeader="Login">
          <Input
            name="email"
            placeholder="email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <Input
            name="password"
            placeholder="password"
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
    </>
  );
}

export default Login;

