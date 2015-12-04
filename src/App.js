import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Board from './components/board.js'
import {Slider, DropDownMenu, RaisedButton} from 'material-ui';
import _ from 'lodash';
export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {n: 5, paused: false, speed: 1000}
    }
    _pause() {
        let currentPause = this.state.paused;
        this.setState({paused: !currentPause})
    }
    _updateSlider(n) {
       this.setState({
            n: n
        });
    }
  render() {
      let boardSize = 600;
      let nQueensRange = [4, 5, 6, 7, 8];
    return (
       <div>
           {_.map(nQueensRange, (n) => <RaisedButton label={n} onClick={() => this._updateSlider(n)} key={n}/>)}
           <Board n={this.state.n} speed={this.state.speed} gridSize={boardSize} paused={this.state.paused}/>
           <RaisedButton label="pause" secondary={true} onClick={this._pause.bind(this)} />
       </div>
    );
  }
}



