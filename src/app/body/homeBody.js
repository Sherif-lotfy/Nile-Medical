import "../globals.css";
import Markdown from 'react-markdown'
const prepare = require("./prepare");

const HomeBody = async () => {
  let desc = await fetch("http://192.168.1.3:3000/api/bodies/home", {
    cache: "no-cache",
  });
  let description = await desc.json();
  description = description.description;
  const prepared = prepare(description);
  return (
    <div>
      <Markdown> # welcome ___ *sherif* ___ **Lotfy**</Markdown>
    <div
      className="text-white p-5 md:pl-10"
      dangerouslySetInnerHTML={{ __html: prepared }}
      >

    </div>
      </div>
  );
};
export default HomeBody;
