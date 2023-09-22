import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RootLayout from './components/Layouts/RootLayout/RootLayout';
import Signup from './pages/Signup/Signup';

function App() {
  return (
    <RootLayout>
      <Routes>
        <Route path='' element={<div></div>} />
        <Route path='/accounts/emailsignup' element={<Signup />} />
        
        <Route path='/:username' element={<div>test2</div>} />
        <Route path='/explore' element={<div>test3</div>} />
      </Routes>
    </RootLayout>
  );
}

export default App;