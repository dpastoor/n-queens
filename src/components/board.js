/**
 * Created by devin on 12/2/15.
 */

import React, { Component } from 'react';
import mui from 'material-ui';
import {GridList, GridTile, IconButton} from 'material-ui';
import _ from 'lodash';
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
           style={{width: gridSize, height: gridSize, overflowY: 'auto', color: 'red', borderStyle: 'solid', borderColor: 'black',
           textAlign: 'center', verticalAlign: 'middle'}}
      >
   {
      tilesData.map((tile, i) =>
          <GridTile style={{borderColor:'black', borderStyle: 'solid'}} key={i}><div>
              <h1>{tile.title} </h1>
          </div></GridTile>
      )
   }
    </GridList>
   )
}
}

