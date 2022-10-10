import { useState } from "react";
import { checkBasic, checkCkDigit } from "./IDChecker";

function CheckIdComponent() {
  let [id, setId] = useState(0);
  let [result, setResult] = useState(false);
  let [ckDigitResult, setCkDigitResult] = useState(false);

  function IDCheck() {
    const r = checkBasic(id);
    setResult(r);
    console.log(`"result: ${result}, ${r}"`);
  }

  function IDCheck_checkDigit() {
    console.log("check id=" + id);
    const r = checkCkDigit(id);
    console.log("back result =" + r);

    setCkDigitResult(r);
    console.log(`"result: ${ckDigitResult}, ${r}"`);
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
        <button onClick={IDCheck_checkDigit}>檢查：檢查碼</button>
      </div>
      <div>
        <label>
          身分證：{id}，結果：{result}
        </label>
      </div>
      <div>
        <label>
          身分證：{id}，檢查結果：{ckDigitResult}
        </label>
      </div>
    </div>
  );
}

export default CheckIdComponent;
