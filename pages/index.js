import { unwrapResult } from "@reduxjs/toolkit";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseValue,
  increaseValue,
  increaseValueBy,
} from "../features/counter/counterSlice";
import { fetchProducts } from "../features/counter/productSlice";

export default function Home() {
  const counterRef = useRef(null);
  const count = useSelector((state) => state.counter.value);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [test, setTest] = useState("");
  const testRef = useRef("");
  testRef.current = test;

  const handleClickIncrease = () => {
    dispatch(increaseValue());
  };

  const handleClickDecrease = () => {
    dispatch(decreaseValue());
  };

  const handleClickIncreaseAmount = () => {
    dispatch(increaseValueBy(parseInt(counterRef.current.value)));
  };

  //Can update value directly after setting state by using useRef and setTimeout
  const updateStateTest = () => {
    setTest("haha");
    setTimeout(() => {
      console.log(testRef.current);
    }, 0);
  };

  //async reduxtoolkit-thunk with results returned
  const fetchProductsAction = () => {
    dispatch(fetchProducts())
      .then(unwrapResult)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {count}
      <div>
        <button onClick={handleClickIncrease}>Increase Amount</button>
      </div>
      <div>
        <button onClick={handleClickDecrease}>Decrease Amount</button>
      </div>
      <div>
        <button
          onClick={() => {
            handleClickIncreaseAmount();
          }}
        >
          Increase amount by
        </button>
        <input ref={counterRef} type="text" />
      </div>
      <button onClick={updateStateTest}>Update state value</button>
      <button onClick={fetchProductsAction}>Fetch products</button>
    </div>
  );
}
