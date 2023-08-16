
// herer is using redux and react-redux;

// import { createStore } from 'redux';

// const initialState = { counter: 0, showCounter: true }

// const reducerFunction = (state = initialState, action) => {
//     if (action.type === "INCREMENT") {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         }
//     }
//     if (action.type === "DECREMENT") {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         }
//     }
//     if (action.type === "INCREASEBY") {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//     }
//     if (action.type === "TOGGLE") {
//         return {
//             showCounter: !state.showCounter,
//             counter: state.counter
//         }
//     }
//     return state
// }

// const store = createStore(reducerFunction);

// export default store;

// we are using redux toolkit ------------------------------------------

import { configureStore } from "@reduxjs/toolkit";
import reducers from "../reducers";

const store = configureStore({ reducer: reducers });

export default store;