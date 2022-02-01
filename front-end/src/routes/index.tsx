import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import Landing from '../pages/Landing'
import Login from '../pages/Login';
import Messages from '../pages/Messages'
import NotFound from '../pages/NotFound';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;                            
