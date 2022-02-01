import Form from "../../components/Form";
import Header from "../../components/Header";
import { PageContainer } from "./style";

function Login() {
  return (
    <>
      <Header />
      
      <PageContainer className="container">

        <Form action="submit" formHeader="Login">
          <input name="email" placeholder="email" type="email" />
          <input name="password" placeholder="password" type="password" />
        </Form>
      </PageContainer>
    </>
  );
}

export default Login;;

