import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Board from './components/board.js'
import {Slider, DropDownMenu, RaisedButton} from 'material-ui';
import _ from 'lodash';
export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {n: 5}
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

           <Board n={this.state.n} gridSize={boardSize} />
       </div>
    );
  }
}