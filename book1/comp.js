import React, {Component} from 'react';
import {render} from 'react-dom';
import classNames from 'classnames';
function transProps(transFn) {
    return function (Comp) {
        return class extends Component{
            render() {
                return <Comp {...transFn(this.props)}></Comp>
            }
        }
    }
}

class Button extends Component{

    render() {
        return <h1>{this.props.name}</h1>
    }
}
const NewAdapter = transProps(function(props) {
    var newProps = Object.assign({},props);
    if (newProps.name && newProps.name == 'wheats') {
        newProps.name = '你就是梁兴磊啊';
    }
    return newProps;
})(Button);
const props = {name: 'wheats', age:32};
render(<NewAdapter {...props}/>, document.getElementById('app'));