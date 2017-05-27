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
        return (
            <ul>
                <Student name="zhangsan"/>
                <Student name="lisi"/>
            </ul>
        )
    }
}

render(<StudentList/>, document.getElementById('app'));