function IdCreaterComponent() {
  return (
    <div>
      <h1>身分證製造機</h1>
      <div>
        <label>選擇縣市</label>
        <select id="SelectCity">
          <option value="10">A-臺北市</option>
          <option value="11">B-臺中市</option>
          <option value="12">C-基隆市</option>
          <option value="13">D-臺南市</option>
          <option value="14">E-高雄市</option>
          <option value="15">F-新北市</option>
          <option value="16">G-宜蘭縣</option>
          <option value="17">H-桃園市</option>
          <option value="34">I-嘉義市</option>
          <option value="18">J-新竹縣</option>
          <option value="19">K-苗栗縣</option>
          <option value="21">M-南投縣</option>
          <option value="22">N-彰化縣</option>
          <option value="35">O-新竹市</option>
          <option value="23">P-雲林縣</option>
          <option value="24">Q-嘉義縣</option>
          <option value="27">T-屏東縣</option>
          <option value="28">U-花蓮縣</option>
          <option value="29">V-臺東縣</option>
          <option value="32">W-金門縣</option>
          <option value="30">X-澎湖縣</option>
          <option value="33">Z-連江縣</option>
          <option value="20">L-臺中縣</option>
          <option value="25">R-臺南縣</option>
          <option value="26">S-高雄縣</option>
          <option value="31">Y-陽明山管理局 </option>
        </select>
      </div>
      <div>
        <label>選擇性別</label>
        <select id="SelectGender">
          <option value="1">男（本國出生）</option>
          <option value="2">女（本國出生）</option>
          <option value="8">男（非本國出生）</option>
          <option value="9">女（非本國出生）</option>
        </select>
      </div>
      <div>
        <button>產生</button>
      </div>
    </div>
  );
}

export default IdCreaterComponent;
