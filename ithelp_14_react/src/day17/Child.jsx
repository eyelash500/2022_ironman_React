function ChildLayer(props) {
  // 無法修改資料，會發生錯誤：
  // Uncaught TypeError: Cannot add property name, object is not extensible
  //   props.name = "睫毛";
  //   props.counter = props.counter++;
  let { name, counter } = props;
  console.log("name:" + props.name + ",counter:" + props.counter);

  return (
    <div>
      <div>
        <h2>子層</h2>
      </div>
      <div>
        <label>
          Hi, {name} 是 {counter} 歲
        </label>
      </div>
    </div>
  );
}

export default ChildLayer;
