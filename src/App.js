import React from 'react';
import logo from './logo.svg';
import './App.css';
import Squares from './components/Squares';

function App() {
  console.log('Rendering App ..')

  return (
    <div className="App">
      <Squares />
    </div>
  );
}

export default App;
