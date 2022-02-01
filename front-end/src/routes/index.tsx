import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import Landing from '../pages/Landing'
import Messages from '../pages/Messages'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
