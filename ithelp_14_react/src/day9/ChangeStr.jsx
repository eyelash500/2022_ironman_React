import { useState } from "react";

function ChangeStr() {

  let [tempWord, setWord] =useState(0);
  let [resultWord, setResultWord] =useState(0);

  const handleInputChange=(e)=>{
    let {value} = e.target;
    setResultWord("這是輸入的事件："+value);
  }

  return (
    <div>
      <h1>Change the words</h1>
      <div>
        <input itemType="text" placeholder="input" onChange={handleInputChange}></input>
      </div>
      <div id="result">{tempWord}</div>
      <div><label>{resultWord}</label></div>
      <div>
        <button
          onClick={() => {
            setWord("這是點擊按鈕的事件");
          }}
        >
          按我~
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            setWord(0);
            setResultWord(0);

          }}
        >
          重置
        </button>
      </div>
    </div>
  );
}

export default ChangeStr;