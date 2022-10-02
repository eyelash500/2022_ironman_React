function LinkGroupItem(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <a href={props.url}>{props.name}</a>
    </div>
  );
}

export default LinkGroupItem;
