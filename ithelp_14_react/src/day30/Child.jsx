function ChildLayer(props) {
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
