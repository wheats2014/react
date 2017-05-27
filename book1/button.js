import React,{Component} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';

class ButtonComponent extends Component{
    constructor(props) {
        super(props);
    }
    clickHandler() {

        this.props.clickHandler();
    }

    static propsTypes = {
        clickHandler: PropTypes.func
    }

    render() {
        let tagType = this.props.tag;
        if (tagType == 'button') {
            return (
                <button className="btn btn-primary" onClick={this.clickHandler.bind(this)}>
                    {this.props.children}
                </button>
            )
        } else {
            return (
                <button className="btn btn-link" onClick={this.clickHandler.bind(this)}>
                    {this.props.children}
                </button>
            )
        }
    }
}

function clickEventHandler(e) {
    console.log(e)
}

render(<ButtonComponent tag="a" clickHandler = {this.clickEventHandler}>提交</ButtonComponent>, document.getElementById('app'));