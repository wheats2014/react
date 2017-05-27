/**
 * Created by Administrator on 2017/5/19.
 */
import React, {Component} from 'react';
import ChildComponent from './childComponent'

export default class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: '',
            title: '我很爱你啊'
        }

    }
    showIndex = (index)=> {
        if (index==0) {
            this.setState({
                title: '我去你妈的'
            })
        } else {
            this.setState({
                title: '我很爱你啊'
            })
        }
    }

    render() {
        return (<ul>{this.props.list.map((entry, index)=>(
            <ChildComponent showIndex={this.showIndex} key={`id-${index}`} {...entry} index={index}/>
        ))}<li>{this.state.title}</li></ul>)
    }
}