/**
 * Created by devin on 12/2/15.
 */

import React, { Component } from 'react';
import mui from 'material-ui';
import {GridList, GridTile, IconButton} from 'material-ui';
export default class Board extends React.Component {

render() {
    let n = 3
    let gridSize = 600;
    let cellTotalSize = gridSize-20;
    let tilesData = [
        {title: 'test1', author:'devin'},
        {title: 'test3', author:'devin'},
        {title: 'test4', author:'devin'},
        {title: 'test5', author:'devin'},
        {title: 'test6', author:'devin'},
        {title: 'test2', author:'albert'},
        {title: 'test7', author:'devin'},
        {title: 'test8', author:'albert'},
        {title: 'test9', author:'albert'}
    ];
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
