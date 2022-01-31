import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import App from '.'
import Landing from './Pages/Landing'

import Messages from './Pages/Messages'

export default function AppRoutes() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Landing />} />
          <Route path="messages" element={<Messages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )

}

