import React, { useEffect } from 'react';
import messageService from '../services/messages';

function App() {
  useEffect(() => {
    messageService.getMessages();
  }, []);
  return (
    <div>
    </div>
  );
}

export default App;
