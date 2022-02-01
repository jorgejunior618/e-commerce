import { Link } from "react-router-dom";
import { Button, ButtonsWrapper, HeaderWrapper } from "./styles";

function Header() {
  return (
    <HeaderWrapper>
      <h1>E-Commerce</h1>

      <ButtonsWrapper>
        <Link to="Messages">
          <Button>
            Ver Avaliações
          </Button>
        </Link>

        <Link to="">
          <Button>
            Fazer Login
          </Button>
        </Link>

        <Link to="">
          <Button>
            Cadastrar-se
          </Button>
        </Link>
      </ButtonsWrapper>
    </HeaderWrapper>
  );
}

export default Header;;

