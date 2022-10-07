import { useState } from "react";
import { checkBasic } from "./IDChecker";

function CheckIdComponent() {
  let [id, setId] = useState(0);
  let [result, setResult] = useState(0);

  function IDCheck() {
    console.log("id=" + id);
    const r = checkBasic(id);
    setResult(r);
    console.log(`"result: ${result}, ${r}"`);
  }

  return (
    <div>
      <h1>檢查身份證</h1>
      <div>
        <label>輸入身分證字號：</label>
        <input
          itemType="text"
          className="idno"
          onChange={(e) => setId(e.target.value)}
        ></input>
        <button onClick={IDCheck}>檢查</button>
      </div>
      <div>
        <label>
          身分證：{id}，結果：{result}
        </label>
      </div>
    </div>
  );
}

export default CheckIdComponent;
