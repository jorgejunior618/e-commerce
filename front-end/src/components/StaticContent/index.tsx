import { Outlet } from "react-router-dom";
import Header from "../Header";
import { PageContainer } from "./styles";

function StaticContent() {
  return (
    <>
      <Header />
      <PageContainer className="container">
        <Outlet />
      </PageContainer>
    </>
  );
}

export default StaticContent;
