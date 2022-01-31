import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import { PageContainer } from "./styles";
function App() {
  return (
    <div>
      <Header />
      <PageContainer>
        <Outlet />
      </PageContainer>
    </div>
  );
}

export default App;
