import { useCallback, useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom'
import StaticContent from '../components/StaticContent';

import Landing from '../pages/Landing'
import Login from '../pages/Login';
import Messages from '../pages/Messages'
import NotFound from '../pages/NotFound';
import Profile from '../pages/Profile';
import SignUp from '../pages/Signup';
import { isLogged, setSession } from '../utils/http';

function RouterWrapper() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

function Router() {
  const [ isUserLogged, setUserLogged ] = useState(false);
  const navigateTo = useNavigate();

  useEffect(() => {
    setUserLogged(isLogged());
  }, []);

  const logout = useCallback(() => {
    setSession();
    setUserLogged(false);
    navigateTo('/login')
  }, [navigateTo]);

  return (
    <Routes>
      <Route path="/" element={<StaticContent
        isUserLogged={isUserLogged}
        logout={logout}
      />} >
        <Route path="" element={<Landing />} />
        <Route path="messages" element={<Messages />} />
        { isUserLogged ?
          <Route path="profile" element={<Profile />} /> :
          <></>
        }
        <Route path="login" element={<Login setUserLogged={() => setUserLogged(true)} />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default RouterWrapper;                            
