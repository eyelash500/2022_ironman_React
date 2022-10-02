import LinkItem from "./LinkSample";

function LinkGroupItem2(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <LinkItem url={props.url}></LinkItem>
    </div>
  );
}

export default LinkGroupItem2;
