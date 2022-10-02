import { useState } from "react";

function DegreeChange() {
  let [celsius, setCelsius] = useState(0);
  let [fahrenheit, setFahrenheit] = useState(0);

  const handleCelsiusChange = (e) => {
    const newCelsius = e.target.value;
    setCelsius(newCelsius);
    setFahrenheit((9.0 / 5.0) * newCelsius + 32);
    console.log("e:" + newCelsius + "|f:" + fahrenheit);
  };

  const handleFahrenheitChange = (e) => {
    const newFahrenheit = e.target.value;
    setFahrenheit(newFahrenheit);
    setCelsius((5.0 / 9.0) * (newFahrenheit - 32));
    console.log("e:" + newFahrenheit + "|c:" + celsius);
  };

  return (
    <div>
      <h1>溫度換算</h1>
      <div>
        <label>攝氏溫度（°C ）</label>
        <div>
          <input itemType="text" onChange={handleCelsiusChange}></input>
        </div>
      </div>
      <div>
        <label>華氏溫度（°F ）</label>
        <div>
          <input itemType="text" onChange={handleFahrenheitChange}></input>
        </div>
      </div>
      <div>
        <label>
          {celsius}°C ={fahrenheit} °F
        </label>
      </div>
    </div>
  );
}

export default DegreeChange;
