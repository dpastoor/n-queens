/**
 * Created by devin on 12/2/15.
 */

import React, { Component } from 'react';
import mui from 'material-ui';
import  {GridTile} from 'material-ui';

export default class ChessTile extends React.Component {
    
    _onClick(e, value) {
        alert('clicked');
    }
    render() {

   return(
           <GridTile style={{borderColor:'black', borderStyle: 'solid'}}
                     onClick={this._onClick.bind(this)}
           >
                   <h1> {this.props.title} </h1>
           </GridTile>
   )
}
}

