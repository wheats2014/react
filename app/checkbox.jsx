import React, {Component} from 'react';

class Checkbox extends Component{
    constructor(props) {
        super(props);

        this.state = {
            coffee: []
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const {checked, value} = e.target;
        let {coffee} = this.state;

        if (checked && coffee.indexOf(value) === -1) {
            coffee.push(value);
        } else {
            coffee = coffee.filter(i => i !== value);
        }

        this.setState({
            coffee
        });
    }

    render() {
        const {coffee} = this.state;
    }
}