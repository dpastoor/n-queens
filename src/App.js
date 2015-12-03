import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Board from './components/board.js'
import {Slider} from 'material-ui';
export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {n: 5}
    }
    updateSlider(e, value) {
       this.setState({
            n: value
        });
    }
  render() {
    return (
       <div>
           <Slider name="mySlider" ref="mySlider" defaultValue={5} step={1} min={1} max={8} onChange={this.updateSlider.bind(this)} />

           <Board n={this.state.n} gridSize={600} />
       </div>
    );
  }
}