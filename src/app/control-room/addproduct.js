const add = async (pname, p) => {
  let thebody = JSON.stringify({ productName: pname, price: p });
  await fetch("http://192.168.1.3:3000/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: thebody,
  });
};
module.exports = add;
