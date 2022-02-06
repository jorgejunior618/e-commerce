import { Outlet } from "react-router-dom";
import Header from "../Header";
import { PageContainer } from "./styles";

type MyProps = {
  isUserLogged: boolean,
  logout: Function,
}

function StaticContent({ isUserLogged, logout }: MyProps) {
  
  return (
    <>
      <Header handleLogOut={logout} isUserLogged={isUserLogged} />
      <PageContainer className="container">
        <Outlet />
      </PageContainer>
    </>
  );
}

export default StaticContent;
