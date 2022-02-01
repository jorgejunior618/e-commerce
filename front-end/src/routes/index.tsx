import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import Landing from '../pages/Landing'
import Messages from '../pages/Messages'
import NotFound from '../pages/NotFound';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;                            
