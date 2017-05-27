import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Counter from './components/Counter';
import counter from './reducers';
import {increment, decrement, incrementIfOdd, incrementAsync} from './actions';

const store = createStore(counter, applyMiddleware(thunk));
const rootEl = document.getElementById('root');

const actions = {
    onIncrement:() => store.dispatch(increment()),
    onDecrement:() => store.dispatch(decrement()),
    onIncrementIfOdd:() => store.dispatch(incrementIfOdd()),
    onIncrementAsync:() => store.dispatch(incrementAsync())
}

function render() {
    ReactDOM.render(
        <Counter
            value={store.getState()}
            {...actions}
        />,
        rootEl
    );
}

render();
store.subscribe(render);