import { useState } from "react";

function StrCodeChange() {
    let [sourceStr, setSourceStr] = useState(0);
    let [uri, setUri] = useState(0);
    let [asciiCode, setAsciiCode] = useState(0);

    const handleChange = (e)=>{
        setSourceStr(e.target.value);
        Change2Uri();
        Change2Ascii();
    }

  const Change2Uri = () => {
    //encodeURI: 某些符號無法處理
    //encodeURIComponent: 比encodeURI 好
    setUri(encodeURIComponent(sourceStr));
    console.log("uri:" + uri);
  };

  const Change2Ascii= () => {    
    let r = "";
    for(var i=0 ; i < sourceStr.length; i++){
        r+= sourceStr.charCodeAt(i)+" ";
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