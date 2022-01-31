import { Link } from "react-router-dom";
import { Button, ButtonsWrapper } from "./styles";

function Landing() {
  return (
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
  )
}

export default Landing;

