import React, { Component }
from 'react';
import ReactDom from 'react-dom';
import Button from 'button.js';
export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue : '' }
  }
  static defaultProps = {color : 'blue', text : 'confirm'};

  handleClick = (e) => { console.log(e); };
  inputChange(e) { this.setState({inputValue : e.target.value.toUpperCase()}); }
  componentDidMount() {
    // const ref = this.refs.lxl;
    // const dom = ReactDom.findDOMNode(ref);
    // dom.addEventListener('click', e => { console.log(e); });
    // const dom = ReactDom.findDOMNode(this);
    // console.log(dom);
  }

  render() {
    const {color, text} = this.props;
    <Button type = {primary} />return (
        <div><button ref = "lxl" onClick = { this.handleClick } className =
                  {`btn btn-${color}`}>{text}<
            / button><input type="text" value={this.state.inputValue} onChange={::this.inputChange}/><
            / div>);

    <form>
                <Button onClick={}/>
            </form>
  }
}
