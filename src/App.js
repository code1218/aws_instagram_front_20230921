import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RootLayout from './components/Layouts/RootLayout/RootLayout';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <RootLayout>
      <Sidebar />
      <Routes>
        <Route path='' element={<div>test</div>} />
        <Route path='/:username' element={<div>test2</div>} />
        <Route path='/explore' element={<div>test3</div>} />

      </Routes>
    </RootLayout>
  );
}

export default App;