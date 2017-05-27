import React, {Component} from 'react';
import {render} from 'react-dom';

class Student extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>{this.props.name}</li>
        )
    }
}

class StudentList extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        var obj = {name: 'wheats',age:20};
        var {age, ...other} = obj;
        console.log(other)
        return (
            <ul>
                {this.props.children}
            </ul>
        )
    }
}

render(<StudentList>
    <Student name="zhangsan"/>
    <Student name="lisi"/>
</StudentList>, document.getElementById('app'));