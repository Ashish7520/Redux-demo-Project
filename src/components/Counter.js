import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrementHandler = () => {
    dispatch({ type: "DECREMENT" });
  };

  const incementBy2Handler = () => {
    dispatch({ type: "INCREMENTBY2" });
  };

  const decrementBy2Handler = () => {
    dispatch({ type: "DECREMENTBY2" });
  };

  const counter = useSelector((state) => state.counter);

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Incement</button>
        <button onClick={incementBy2Handler}>Incement by 2</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={decrementBy2Handler}>Decrement by 2</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
