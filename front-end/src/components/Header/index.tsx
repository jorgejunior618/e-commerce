import { Link } from "react-router-dom";
import Button from "../Button";
import { ButtonsWrapper, HeaderWrapper } from "./styles";

function Header() {
  return (
    <HeaderWrapper className="container">
      <Link to="/">
        <h1>E-Commerce</h1>
      </Link>

      <ButtonsWrapper>
        <Link to="/messages">
          <Button>
            Ver Avaliações
          </Button>
        </Link>

        <Link to="/login">
          <Button>
            Fazer Login
          </Button>
        </Link>

        <Link to="/signup">
          <Button>
            Cadastrar-se
          </Button>
        </Link>
      </ButtonsWrapper>
    </HeaderWrapper>
  );
}

export default Header;;

