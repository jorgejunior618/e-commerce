import { Outlet } from "react-router-dom";
import { PageContainer, AppWraper } from "./styles";
function App() {
  return (


    <PageContainer>
      <AppWraper><Outlet /></AppWraper>
    </PageContainer>
  );
}

export default App;
