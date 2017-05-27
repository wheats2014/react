import React, {Component} from 'react';

export default class Button extends Component{
    constructor(props) {
        super(props);
        this.state = {
            list:[]
        }
    }

    componentDidMount() {
        var _this = this;
        fetch('./1.json').then(response=>response.json()).then(data=>{
            _this.setState({
                list: data
            })
        });
    }

    render() {
        //const {color, text} = this.props;
        const {list} = this.state;
        return(
            <ul>
                {this.state.list.map((entry,index)=>(
                    <li key={`${index}`}>{entry.name}</li>
                ))}

            </ul>
        );
    }
}

Button.defaultProps = {
    color: 'blue',
    text: 'Confirm'
}