import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../state/slice/counter-slice';

const Counter = () => {

  const counter = useSelector((state) => state.counterReducer.counter);
  const show = useSelector((state) => state.counterReducer.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    // dispatch({ type: "INCREMENT" });
    dispatch(counterActions.Increment());
  }

  const decrementHandler = () => {
    // dispatch({ type: "DECREMENT" });
    dispatch(counterActions.Decrement());
  }

  const increseHandlerBy = () => {
    // dispatch({ type: "INCREASEBY", amount: 5 });
    dispatch(counterActions.IncreaseBy(5));
  }

  const toggleCounterHandler = () => {
    // dispatch({ type: "TOGGLE" });
    dispatch(counterActions.Toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increseHandlerBy}>Increse by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
