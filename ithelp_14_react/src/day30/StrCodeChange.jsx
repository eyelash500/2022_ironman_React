import { useState } from "react";

function StrCodeChange() {
  let [uri, setUri] = useState(0);
  let [asciiCode, setAsciiCode] = useState(0);

  const handleChange = (e) => {
    const newStr = e.target.value;
    Change2Uri(newStr);
    Change2Ascii(newStr);
  };

  const Change2Uri = (source) => {
    //encodeURI: 某些符號無法處理
    //encodeURIComponent: 比encodeURI 好
    setUri(encodeURIComponent(source));
    console.log("uri:" + uri);
  };

  const Change2Ascii = (source) => {
    let r = "";
    for (var i = 0; i < source.length; i++) {
      r += source.charCodeAt(i) + " ";
      console.log(r);
    }

    setAsciiCode(r);
    console.log("ASCII:" + asciiCode);
  };

  return (
    <div>
      <h1>編碼換算</h1>
      <div>
        <label>輸入字串：</label>
        <input itemType="text" onChange={handleChange}></input>
      </div>
      <div>
        <label>URI code:</label>
        <label>{uri}</label>
      </div>
      <div>
        <label>ASCII :</label>
        <label>{asciiCode}</label>
      </div>
    </div>
  );
}

export default StrCodeChange;
