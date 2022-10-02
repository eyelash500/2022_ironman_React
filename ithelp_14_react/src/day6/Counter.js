import { useState } from "react";

function Counter() {
  let times = 0; //計算次數
  let [times_2, setTime] = useState(0); //計算次數

  return (
    <div id="counters">
      <h1>This is a counter!</h1>
      <div>
        <button
          onClick={() => {
            console.log(`times-before: ${times} and ${times_2}`);
            times++;
            times_2++;
            console.log(`times-finished: ${times} and ${times_2}`);
            setTime(times_2);
          }}
        >
          按我
        </button>
      </div>
      <div>times: {times}</div>
      <div>times2: {times_2}</div>
    </div>
  );
}

export default Counter;
