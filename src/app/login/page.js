"use client";
import { useState } from "react";
import Link from "next/link";
import GoBack from "../GoBack";

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const usernameChange = (e) => {
    setusername(e.target.value);
  };
  const passwordChange = (e) => {
    setpassword(e.target.value);
  };

  const Clicked = (e) => {
    e.preventDefault();
    const { Go } = require("./go");
    Go(username, password);
  };

  return (
    <body className="text-white bg-cyan-950">
      <div className="h-screen w-screen relative">
        <div className="sticky top-0 p-3 bg-white md:block flex justify-center">
          <Link href={"../"}>
            <h1 className=" reddit-mono-lol text-2xl text-cyan-950">
              Nile Medical
            </h1>
          </Link>
        </div>
        <br/>
        <GoBack href={"../"}/>
        <form>
          <div className="flex p-5 pl-10 pr-10 flex-col place-items-center gap-10 absolute md:left-1/4 md:right-1/4 left-5 right-5 top-1/4 border-2 rounded shadow-lg font-semibold bg-white text-cyan-950">
            <h2 className="text-2xl">Login</h2>
            <div className="md:flex w-full justify-between">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={usernameChange}
                className=" md:w-4/5 w-full md:mr-5 rounded outline-none bg-cyan-900 text-white"
              />
            </div>
            <div className="md:flex w-full justify-between">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={passwordChange}
                className=" md:w-4/5 w-full md:mr-5 rounded outline-none bg-cyan-900 text-white"
              />
            </div>
            <div className="flex md:w-full  justify-end">
              <button type="submit" onClick={Clicked} className="bg-white rounded outline-none shadow-lg border border-cyan-950 p-5 hover:scale-105 transition-all pt-2 pb-2 md:mr-20">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </body>
  );
};

export default Login;
