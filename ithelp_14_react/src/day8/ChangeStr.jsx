import { useState } from "react";

function ChangeStr() {

  let [tempWord, setWord] =useState(0);
  let [resultWord, setResultWord] =useState(0);

  return (
    <div>
      <h1>Change the words</h1>
      <div>
        <input itemType="text" placeholder="input" id="words"></input>
      </div>
      <div id="result">{tempWord}</div>
      <div>
        <button
          onClick={() => {
            setWord("test");
          }}
        >
          按我
        </button>
      </div>
    </div>
  );
}

export default ChangeStr;