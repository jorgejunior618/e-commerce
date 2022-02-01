import shopImg from '../../images/shop.png';
import Header from "../../components/Header";
import { PageWrapper } from "./styles";

function Landing() {
  return (
    <>
      <Header />
      <PageWrapper>
        <img src={shopImg} alt="Loja virtual" />
      </PageWrapper>
    </>
  )
}

export default Landing;

