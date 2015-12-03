/**
 * Created by devin on 12/2/15.
 */

import React, { Component } from 'react';
import mui from 'material-ui';
import {GridList, GridTile, IconButton} from 'material-ui';
export default class Board extends React.Component {
render() {
    let tilesData = [{title: 'test1', author:'devin'}, {title: 'test2', author:'albert'}];
   return(
       <GridList
           cellHeight={200}
           style={{width: 320, height: 640, overflowY: 'auto'}}
      >
   {
      tilesData.map(tile => <GridTile
      title={tile.title}
      subtitle={<span>by <b>{tile.author}</b></span>}
   ><h1>test </h1></GridTile>)
   }
    </GridList>
   )
}
}
