import { Link } from "react-router-dom";
import { Button, ButtonsWrapper, HeaderWrapper } from "./styles";

function Header() {
  return (
    <HeaderWrapper>
      <Link to="/">
        <h1>E-Commerce</h1>
      </Link>

      <ButtonsWrapper>
        <Link to="/messages">
          <Button>
            Ver Avaliações
          </Button>
        </Link>

        <Link to="/">
          <Button>
            Fazer Login
          </Button>
        </Link>

        <Link to="/">
          <Button>
            Cadastrar-se
          </Button>
        </Link>
      </ButtonsWrapper>
    </HeaderWrapper>
  );
}

export default Header;;

