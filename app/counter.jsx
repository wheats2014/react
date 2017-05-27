import React, {Component} from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        //this.handlerClick = this.handlerClick.bind(this);
        this.state = {
            count: 0
        }
    }

    static defaultProps = {
        color: 'blue',
        text: 'Confirm'
    }

    handlerClick = (e) => {
        e.preventDefault();
        this.setState({
            count: this.state.count + 1
        })
    }

    // handlerClick(e) {
    //     e.preventDefault();
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    // }


    render(){
        return (<div>
            <p>{this.state.count}</p>
            {/*<a href="#" onClick={this.handlerClick.bind(this)}>更新</a>*/}
            {/*<a href="#" onClick={::this.handlerClick}>更新</a>*/}
            <a href="#" onClick={::this.handlerClick}>更新</a>
        </div>);
    }


}

export default Counter;