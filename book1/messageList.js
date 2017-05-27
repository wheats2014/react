import React, {Component} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';

class Button extends Component {
    constructor(props) {
        super(props);
        handlerChange: this.handleChange.bind(this);
    }

    static contextTypes = {
        color: PropTypes.string,
        handleChange: PropTypes.func
    }


    handleChange(index) {
        this.context.handleChange(index);
    }
    render() {
        return(<button onClick={this.handleChange("aaa")} style={{background: this.context.color}}>
            {this.props.children}
        </button>)
    }
}

class Message extends Component {
    render() {
        return (<div>
            {this.props.text} <Button>Delete</Button>
        </div>)
    }
}

class MessageList extends Component {
    constructor(props) {
        super(props);
    }

    static childContextTypes = {
        color: PropTypes.string,
        handleChange: PropTypes.func
    }

    getChildContext() {
        return {color: 'green',handleChange:function (index) {
            console.log(index)
        }}
    }

    render() {
        const children = this.props.messages.map((message, index)=> (<Message key={index} text={message.text}/>));
        return <div>{children}</div>
    }
}
var props = [{text: 'wheats'}, {text: 'lhw'}]
render(<MessageList messages={props}/>, document.getElementById('app'));
