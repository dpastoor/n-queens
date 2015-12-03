/**
 * Created by devin on 12/2/15.
 */

import React, { Component } from 'react';
import mui from 'material-ui';
import {GridList, GridTile, IconButton} from 'material-ui';
import _ from 'lodash';
import ChessTile from './chessTile';

export default class Board extends React.Component {
    render() {

    let n = this.props.n;
    let gridSize = this.props.gridSize;
    let cellTotalSize = gridSize-60;
    // generate some fake data
    let range = _.range(n);
    let cells = _.flatten(_.map(range, (i) => _.map(range, (r) => r+i*n)))
    let tilesData = _.map(cells, (c) => {return {title: c};})
    // end data generation
   return(
       <GridList
           cols={n}
           cellHeight={cellTotalSize/n}
           style={{width: gridSize, height: gridSize, overflowY: 'auto', color: 'red',
           textAlign: 'center', verticalAlign: 'middle'}}
      >
   {
      tilesData.map((tile, i) =>
        <ChessTile title={tile.title} key={i} />
      )
   }
    </GridList>
   )
}
}

