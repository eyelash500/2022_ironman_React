import { useState } from "react";
import ChildLayer from "./Child";

function PropSample() {
  let [name, setName] = useState(0);
  let [counter, setCounter] = useState(0);

  const handleName = (e) => {
    const newStr = e.target.value;
    setName(newStr);
  };

  const handleCounter = (e) => {
    const newStr = e.target.value;
    setCounter(newStr);
  };

  return (
    <div>
      <h1>修改上下層資料</h1>
      <div>
        <h2>原始資料</h2>
      </div>
      <div>
        <label>姓名：</label>
        <input itemType="text" onChange={handleName}></input>
      </div>
      <div>
        <label>年齡：</label>
        <input itemType="text" onChange={handleCounter}></input>
      </div>
      <div>
        <p>
          Hello, {name} 是 {counter} 歲
        </p>
      </div>
      <div>
        <ChildLayer name={name} counter={counter}></ChildLayer>
      </div>
      <div>
        <p>
          Bello, {name} 是 {counter} 歲
        </p>
      </div>
    </div>
  );
}

export default PropSample;
