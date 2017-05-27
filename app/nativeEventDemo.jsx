import React, {Component} from 'react';

export default class NativeEventDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'wheats',
            list:[]
        }
    }

    componentWillMount() {
        let _this = this;
        fetch('1.json').then(function (res) {
            res.json().then(function (data) {
                _this.setState({
                    list: data
                });

            })

        }, function (data) {
        });
    }

    componentDidMount() {
        this.refs.button.addEventListener('click', e => {
            console.log('这是原来的事件');
        });

    }

    componentWillUnmount() {
        this.refs.button.removeEventListener('click');
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.list.map((entry, index)=>(
                        <li key={`key-${index}`}>{entry.text}</li>
                    ))}

                </ul>
                <button ref="button">{this.state.name}</button>
            </div>
        );
    }
}