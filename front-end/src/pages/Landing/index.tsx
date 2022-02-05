import shopImg from '../../images/shop.png';
import { PageWrapper } from "./styles";

function Landing() {
  return (
    <PageWrapper>
      <img src={shopImg} alt="Loja virtual" />
    </PageWrapper>
  )
}

export default Landing;

