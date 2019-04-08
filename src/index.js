import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const defaultState = {
    feeling: 0,
    understanding: 0,
    support: 0,
    comments: '',
}

const counter = 0;

// reducer function to manage global feedback object
const submissionReducer = (state = defaultState, action) => {
    if (action.type === "FEELING") {
        return {
            ...state,
            feeling: action.payload.feeling,
        };
    } else if (action.type === "UNDERSTANDING") {
        return {
            ...state,
            understanding: action.payload.understanding,
        };
    } else if (action.type === "SUPPORT") {
        return {
            ...state,
            support: action.payload.support,
        };
    } else if (action.type === "COMMENTS") {
        return {
            ...state,
            comments: action.payload.comments,
        };
    } else if (action.type === "RESET") {
        return state = defaultState;
    }
    return state;
}

// reducer function to manage submit ready button disabled or not state
const counterReducer = (state = counter, action) => {
    console.log('in counterReducer reducer', state);
    if (action.type === "COUNTER") {
        return state + 1;
    } else if (action.type === "RESET_COUNTER") {
        return state = counter;
    }
    return state;
}

let storeInstance = createStore(
    combineReducers({
        submissionReducer,
        counterReducer,
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

registerServiceWorker();
