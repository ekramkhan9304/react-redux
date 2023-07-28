import { createStore } from 'redux'

const reducerFunction = (state = { counter: 0 }, action) => {
    if (action.type === "INCREMENT") {
        return { counter: state.counter + 1 }
    }
    if (action.type === "DECREMENT") {
        return { counter: state.counter - 1 }
    }
    return state
}

const store = createStore(reducerFunction);

export default store;