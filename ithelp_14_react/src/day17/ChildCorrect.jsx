function CorrectChildLayer(props) {
  const { name, counter, namehandler, counterhandler } = props;
  namehandler("睫毛");
  counterhandler("101");

  return (
    <div>
      <div>
        <h2>Handler 子層</h2>
      </div>
      <div>
        <label>
          Hi, {name} 是 {counter} 歲
        </label>
      </div>
    </div>
  );
}

export default CorrectChildLayer;
