import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Greeting from './components/Greeting';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Greeting />} />
      <Route path="/" exact component={Greeting} />
    </Routes>
  );
}

export default App;
