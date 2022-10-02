function LinkItem(props) {
  return (
    <div>
      {/* <p>The link is: {props.url}</p> */}
      <a href={props.url}>Hyperlink</a>
    </div>
  );
}

export default LinkItem;
