const getData = async (thelink) => {
  console.log("link is ", thelink);
  const d = await fetch(`${thelink}`, {
    method: "GET",
    cache: "no-cache",
  });

  const data = await d.json();
  return data;
};
module.exports = { getData };
