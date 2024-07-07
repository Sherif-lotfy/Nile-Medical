import "../globals.css";
const prepare = require("./prepare");

const ContactUsBody = async () => {
  let desc = await fetch("http://192.168.1.3:3000/api/bodies/contact-us", {
    cache: "no-cache",
  });
  let description = await desc.json();
  description = description.description;
  const prepared = prepare(description);
  return (
    <div
      className="text-white p-5 md:pl-10"
      dangerouslySetInnerHTML={{ __html: prepared }}
    ></div>
  );
};
export default ContactUsBody;
