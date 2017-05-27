import React, {Component} from 'react';
import {render} from 'react-dom';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index:1
        }

    }

    changeIndex(index) {
        this.setState({index: index})
    }

    render() {
        return(<div>
            <TextBox data-index={this.state.index} indexChange={this.changeIndex.bind(this)}/>
        </div>)
    }
}

class TextBox extends Component{
    constructor(props) {
        super(props);
        this.state = {
            enable: false
        }
    }

    handleClick() {
        this.setState({enable: !this.state.enable})
        this.props.indexChange(10);
    }

    render() {
        return (<p><input type="text" data-index={this.props["data-index"]} disabled={this.state.enable}/><input type="button" onClick={this.handleClick.bind(this)} value="设置"/></p>)
    }

    componentWillReceiveProps(nextProps) {
        console.log(this.props)
        console.log(nextProps)
    }
}

render(<List/>, document.getElementById('app'));
