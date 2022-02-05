import { useState } from "react";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { PageContainer } from "./style";

function Login() {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  return (
    <>
      <Header />
      
      <PageContainer className="container">

        <Form action="submit" formHeader="Login">
          <Input
            name="email"
            placeholder="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <Input
            name="password"
            placeholder="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <Button>
            Login
          </Button>
        </Form>
      </PageContainer>
    </>
  );
}

export default Login;;

