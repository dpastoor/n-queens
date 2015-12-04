/**
 * Created by devin on 12/2/15.
 */

import React, { Component } from 'react';
import mui from 'material-ui';
import  {GridTile} from 'material-ui';
import {queenImg} from "../css/QueenImage"
export default class ChessTile extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let styles = {
            borderColor:'black',
            borderStyle: 'solid'
        }
        if (this.props.data.hasConflict) {
            styles = Object.assign(styles, {backgroundColor:'red'})
        }
        if(this.props.data.hasQueen) {
            styles = Object.assign(styles, {borderColor:'blue',
            backgroundSize:'contain', backgroundRepeat: 'no-repeat',
            backgroundImage: queenImg
            });
        }
   return(
           <GridTile style={styles}
           >
           </GridTile>
   )
}
}
