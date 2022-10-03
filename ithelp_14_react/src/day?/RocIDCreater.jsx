import { useState } from "react";

function StrCodeChange() {
  let [uri, setUri] = useState(0);
  let [asciiCode, setAsciiCode] = useState(0);

  return (
    <div>
      <h1>身分證製造機</h1>
      <div>
        <h2>產生生份證</h2>
      </div>
      <div>
        <label>選擇城市：</label>
        <input itemType="text" onChange={handleChange}></input>
      </div>
    </div>
  );
}

export default StrCodeChange;
