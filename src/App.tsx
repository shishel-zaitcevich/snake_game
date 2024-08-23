import * as React from 'react';
import './App.css';
import { Game } from '../src/components/Game';

function App() {
  return (
    <div className="app">
      <h1 className="title">Snake Game</h1>
      <Game />
    </div>
  );
}

export default App;
