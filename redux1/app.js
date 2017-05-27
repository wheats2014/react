import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {increment, decrement, incrementIfOdd, incrementAsync} from './action.js';
import {counter} from './reducer.js';


const store = createStore(counter, applyMiddleware(thunk));

let currentValue = store.getState();

const listener = () => {
    const previousValue = currentValue;
    currentValue = store.getState();

    console.log('pre state: ', previousValue, 'next state: ' ,currentValue);
}

store.subscribe(listener);

store.dispatch(increment());
store.dispatch(incrementIfOdd());
store.dispatch(incrementAsync());
store.dispatch(decrement());