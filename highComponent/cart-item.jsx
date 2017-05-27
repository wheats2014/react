import React from 'react';
import {IntervalEnhance} from './interval-enhance.jsx';

class CartItem extends React.Component{
  render() {
    return (<div>{this.props.seconds}</div>)
  }
}

export default IntervalEnhance(CartItem);
