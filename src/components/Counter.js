import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterAction } from "../Store/Redux";

const Counter = () => {
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterAction.increment());
  };

  const decrementHandler = () => {
    dispatch(counterAction.decrement());
  };

  const incementBy2Handler = () => {
    dispatch(counterAction.increase(2)); // {"some_unique_identifie" , payload:2}
  };

  const decrementBy2Handler = () => {
    dispatch(counterAction.decrease(2));
  };

  const toggleCounterHandler = () => {
    dispatch(counterAction.toggle());
  };

  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
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
