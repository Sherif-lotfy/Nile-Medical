import { cookies } from "next/headers";
import Edit from "./edit";
import Link from "next/link";
export default async function controllroom() {
  
  // const response = await fetch("http://192.168.1.3:3000/api/auth/protected", {
  //   method: "GET",
  //   credentials: "include",
  // });

  // i used post & body cuz this ↑↑↑ doesn't work...

  const response = await fetch("http://192.168.1.3:3000/api/auth/controlroom", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(cookies().get("token")),
  });

  const data = await response.json();

  if (response.ok) {
    return <Edit />;
  } else {
    return (
      <body>
        <div> you'r not authorized... </div>
        <br/>
        <div> Go to the login page </div>
        <br/>
        <Link href={"../login"} className=" bg-cyan-950 border p-2 rounded m-2  text-white hover:scale-110 transition-all">
        Login
        </Link>
      </body>
    );
  }
}
