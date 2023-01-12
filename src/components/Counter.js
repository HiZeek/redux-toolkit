import { useSelector, useDispatch } from 'react-redux';
import { counterActions, selectCounter, selectToggleCounter } from '../store/counter';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(selectCounter);
  const show = useSelector(selectToggleCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  }

  const increaseHandler = () => {
    dispatch(counterActions.increase(10));
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  }
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
