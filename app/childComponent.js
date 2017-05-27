/**
 * Created by Administrator on 2017/5/19.
 */
import React, {Component} from 'react';

export default class ChildComponent extends Component{
    constructor(props) {
        super(props);

        this.handleClidk = this.handleClidk.bind(this);
    }

    handleClidk() {
        //this.props.showIndex(this.props.index);
        this.setState({index: this.props.index})
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    render() {
        return(<li onClick={this.handleClidk}>{this.props.name}</li>)
    }
}