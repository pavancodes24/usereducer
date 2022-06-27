import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const Counter = () => {
  const { state, dispatch } = useContext(AppContext);
  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };
  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };
  return (
    <div>
      <h1>counter</h1>
      <h3>{state.counter} </h3>
      <button onClick={handleIncrement}>ADD</button>
      <button onClick={handleDecrement}>RED</button>
    </div>
  );
};
