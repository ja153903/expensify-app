import { createStore } from 'redux';


// Action generators are functions that return action objects
const incrementCount = ({ incrementBy = 1 }= {}) => {
    return {
        type: 'INCREMENT',
        incrementBy
    }
};

const decrementCount = ({ decrementBy = 1 } = {}) => {
    return {
        type: 'DECREMENT',
        decrementBy
    }
};

const resetCount = ({ reset = 0 } = {}) => {
    return {
        type: 'RESET',
        reset
    }
}

const setCount = ({ count } = {}) => {
    return {
        type: 'SET',
        count
    }
}

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action
const countReducer = (state = { count: 0 }, action) => {

    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: action.reset
            };
        default:
            return state;
    }
};

// we can set state to the default state object
// this function is called the reducer
const store = createStore(countReducer);

// invoked on every dispatch
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// we can call unsubscribe to stop the logs

// actions allow us to increment the store
// an action is an object that gets sent to the store

// we might want increment, decrement, and reset to be our actions
// that we want to dispatch to the store

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(decrementCount({ decrementBy: 2 }));

store.dispatch(resetCount());

store.dispatch(setCount({ count: 10 }));