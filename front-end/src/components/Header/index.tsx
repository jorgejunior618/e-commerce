import { Link } from "react-router-dom";
import { ButtonsWrapper, HeaderWrapper } from "./styles";

function Header() {
  return (
    <HeaderWrapper className="container">
      <Link to="/">
        <h1>E-Commerce</h1>
      </Link>

      <ButtonsWrapper>
        <Link to="/messages">
          <div className="button">
            Ver Avaliações
          </div>
        </Link>

        <Link to="/">
          <div className="button">
            Fazer Login
          </div>
        </Link>

        <Link to="/">
          <div className="button">
            Cadastrar-se
          </div>
        </Link>
      </ButtonsWrapper>
    </HeaderWrapper>
  );
}

export default Header;;

