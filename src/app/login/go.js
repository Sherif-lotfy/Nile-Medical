const Go = async (username, password) => {
  const response = await fetch("http://192.168.1.3:3000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();
  if (response.ok) {
    // alert("Login successful");
    window.location.href = "../control-room";
  } else {
    // alert(data);
  }
};
module.exports = { Go };
