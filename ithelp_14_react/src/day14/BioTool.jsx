import LinkItem from "./LinkSample";
import TitleItem from "./TitleSample";
import LinkGroupItem from "./LinkGroupSample";
import LinkGroupItem2 from "./LinkGroupSample2";

function ShowSample() {
  return (
    <div>
      <h1>Developer's favorite websites</h1>
      <div>
        <TitleItem name="Github"></TitleItem>
        <LinkItem url="https://github.com"></LinkItem>
      </div>
      <div>
        <LinkGroupItem
          name="Stack Overflow"
          url="https://stackoverflow.com"
        ></LinkGroupItem>
      </div>
      <div>
        <LinkGroupItem2
          name="React 中文版"
          url="https://zh-hant.reactjs.org"
        ></LinkGroupItem2>
      </div>
    </div>
  );
}

export default ShowSample;
