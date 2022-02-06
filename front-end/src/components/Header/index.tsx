import { Link } from "react-router-dom";
import Button from "../Button";
import { ButtonsWrapper, HeaderWrapper } from "./styles";

type LinksProps = {
  isUserLogged: boolean,
  handleLogOut: Function,
}

function Header({ isUserLogged, handleLogOut }: LinksProps) {
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
        {isUserLogged ?
          <>
            <Link to="/profile">
              <Button>
                Meu Perfil
              </Button>
            </Link>
            <Button onClick={() => handleLogOut()}>
              Sair
            </Button>
          </> :
          <>
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
          </>
        }
      </ButtonsWrapper>
    </HeaderWrapper>
  );
}

export default Header;;

