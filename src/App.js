import React, { Component } from 'react';
import Board from './components/board.js'
export class App extends Component {
  render() {
    return (
   <Board n={6} gridSize={600} />
    );
  }
}