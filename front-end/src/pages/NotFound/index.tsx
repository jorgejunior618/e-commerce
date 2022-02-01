import Header from '../../components/Header';
import notFoundImg from '../../images/not-found.png';
import { ImgWrapper } from './styles';

function NotFound() {
  return(
    <>
      <Header />
      <ImgWrapper>
        <img src={notFoundImg} alt="Pagina não encontrada" />
      </ImgWrapper>
    </>
  );
}

export default NotFound;

