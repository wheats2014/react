import React, {Component} from 'react';

export default class Select extends Component{
    constructor(props) {
        super(props);

        this.state = {
            area: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {

        this.setState({
            area: e.target.value
        });
    }

    render() {
        const {area} = this.state;
        return (
            <select value={area} onChange={this.handleChange}>
                <option value="beijing">北京</option>
                <option value="shanghai">上海</option>
                <option value="hangzhou">杭州</option>
            </select>
        );
    }
}