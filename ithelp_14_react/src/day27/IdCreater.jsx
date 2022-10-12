import { useState } from "react";
import { createID } from "./IdnoCreater";

function IdCreaterComponent() {
  let [idno, setIdno] = useState("X");
  let [city, setCity] = useState("Y");
  let [gender, setGender] = useState("2");

  const idHandler = () => {
    console.log(`city=${city}, gender=${gender}`);
    const r = createID(city, gender);
    setIdno(r);
    console.log(`idno=${idno}(r)`);
  };

  return (
    <div>
      <h1>身分證製造機</h1>
      <div>
        <label>選擇縣市</label>
        <select
          id="SelectCity"
          defaultValue={city}
          onChange={(e) => setCity(e.target.value)}
        >
          <option value="A">A-臺北市</option>
          <option value="B">B-臺中市</option>
          <option value="C">C-基隆市</option>
          <option value="D">D-臺南市</option>
          <option value="E">E-高雄市</option>
          <option value="F">F-新北市</option>
          <option value="G">G-宜蘭縣</option>
          <option value="H">H-桃園市</option>
          <option value="I">I-嘉義市</option>
          <option value="J">J-新竹縣</option>
          <option value="K">K-苗栗縣</option>
          <option value="M">M-南投縣</option>
          <option value="N">N-彰化縣</option>
          <option value="O">O-新竹市</option>
          <option value="P">P-雲林縣</option>
          <option value="Q">Q-嘉義縣</option>
          <option value="T">T-屏東縣</option>
          <option value="U">U-花蓮縣</option>
          <option value="V">V-臺東縣</option>
          <option value="W">W-金門縣</option>
          <option value="X">X-澎湖縣</option>
          <option value="Z">Z-連江縣</option>
          <option value="L">L-臺中縣</option>
          <option value="R">R-臺南縣</option>
          <option value="S">S-高雄縣</option>
          <option value="Y">Y-陽明山管理局 </option>
        </select>
      </div>
      <div>
        <label>選擇性別</label>
        <select
          id="SelectGender"
          defaultValue={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="1">男（本國出生）</option>
          <option value="2">女（本國出生）</option>
          <option value="8">男（非本國出生）</option>
          <option value="9">女（非本國出生）</option>
        </select>
      </div>
      <div>
        <button onClick={idHandler}>產生</button>
      </div>
      <div>
        <label>身分證字號：{idno}</label>
      </div>
    </div>
  );
}

export default IdCreaterComponent;
