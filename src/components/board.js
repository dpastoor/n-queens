/**
 * Created by devin on 12/2/15.
 */

import React, { Component } from 'react';
import mui from 'material-ui';
import {GridList, GridTile, IconButton} from 'material-ui';
import _ from 'lodash';
import ChessTile from './chessTile';

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {allSolutionBoards: [], calculating: true, stepNum: 1, paused:false};
    }

    _calculateSolutions() {
        var solutions = [];
        var allBoards = [];
        var n = this.props.n;
        var major;
        var minor;
        var inner = function(majD, minD, col, queens){

            var board = [];
            for(var r = 0; r < n; r++){
                var   row = [];
                for( var c = 0; c < n; c++){
                    row.push('-')
                }
                board.push(row)
            }

            Object.keys(col).forEach(function(col){
                board.forEach(function(row){
                    row[col] = 'x'
                })
            });

            for(var r = 0; r < n; r++){
                for( var c = 0; c < n; c++){
                    if(majD[r-c]){
                        board[r][c] = 'x'
                    }
                    if(minD[r+c]){
                        board[r][c] = 'x'
                    }
                }
            }

            queens.forEach(function(col,row){
                board[row] = board[row].map(function(x){ return 'x'});
                board[row][col] = 'Q'

            });

            allBoards.push(board);
            if(queens.length == n){
                solutions.push(queens.slice())

            }

            else{
                for(var i = 0; i < n; i++){
                     minor = i + queens.length;
                     major = i - queens.length;

                    if(!(majD[major] || minD[minor] || col[i]) ){
                        queens.push(i);
                        col[i] = 1;
                        majD[major] = 1;
                        minD[minor] = 1;
                        inner(majD, minD, col, queens);

                    }

                }

            }
            i = queens.pop();
            delete col[i];
            minor = i + queens.length;
            major = i - queens.length;
            delete majD[major];
            delete minD[minor];

        };

        inner({}, {}, {}, []);
        this.setState({allSolutionBoards: allBoards, calculating: false})
    }
    componentWillMount() {
        this._calculateSolutions();
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            calculating: true,
            stepNum: 1
        });
        this._calculateSolutions();
    }
    render() {
        if(!this.state.calculating) {
    if (!this.props.paused) {
        if(this.state.stepNum < this.state.allSolutionBoards.length) {
            setTimeout(() => {
                let steps = this.state.stepNum + 1;
                this.setState({stepNum: steps})
            },100)
        }
        }
    let n = this.props.n ;
    let gridSize = this.props.gridSize;
    let cellTotalSize = gridSize-60;
    let range = _.range(n);
        let tilesData = _.flatten(this.state.allSolutionBoards[this.state.stepNum]).map((x) => {
            switch (x) {
                case 'Q':
                    return {hasQueen: 1, hasConflict: 1};
                case 'x':
                    return {hasQueen:0, hasConflict: 1};
                case '-':
                    return {hasQueen:0, hasConflict:0};
            }
        });
   return(
       <div>
           <GridList
               cols={n}
               cellHeight={cellTotalSize/n}
               style={{width: gridSize, height: gridSize, overflowY: 'auto', color: 'black',
           textAlign: 'center', verticalAlign: 'middle'}}
           >
               {
                   tilesData.map((tile, i) =>
                       <ChessTile data={tile} key={i} />
                   )
               }
           </GridList>
       </div>
   )
        }

}
}

