import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import StaticContent from '../components/StaticContent';

import Landing from '../pages/Landing'
import Login from '../pages/Login';
import Messages from '../pages/Messages'
import NotFound from '../pages/NotFound';
import SignUp from '../pages/Signup';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StaticContent />} >
          <Route path="" element={<Landing />} />
          <Route path="messages" element={<Messages />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;                            
