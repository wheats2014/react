import React, {Component} from 'react';

class Input extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: '',
            textareaValue: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleTextareaChange = this.handleTextareaChange.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        });
    }

    handleTextareaChange(e) {
        this.setState({
            textareaValue: e.target.value
        });
    }

    render() {
        const {inputValue, textareaValue} = this.props;
        return (<div>
            <p>单行输入框： <input type="text" value={inputValue} onChange={this.handleInputChange}/></p>
            <p>多行输入框： <textarea value={inputValue} onChange={this.handleTextareaChange}/></p>
        </div>);
    };
}

export default Input;