import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Counter extends Component{
    static propTypes = {
        value: PropTypes.number.isRequired,
        onIncrement: PropTypes.func.isRequired,
        onDecrement:PropTypes.func.isRequired
    }

    render() {
        const {value, onIncrement, onDecrement, onIncrementIfOdd, onIncrementAsync} = this.props;

        return (
            <p>
                Clicked: {value} times
                {' '}
                <button onClick={onIncrement}>+</button>
                {' '}
                <button onClick={onDecrement}>-</button>
                {' '}
                <button onClick={onIncrementIfOdd}>Increment If Odd</button>
                {''}
                <button onClick={onIncrementAsync}>Increment async</button>
            </p>
        )
    }
}