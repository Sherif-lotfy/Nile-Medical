"use client";
import GoBack from "../../../GoBack";
import "../../../globals.css";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
const ms = () => {
  const [data, setData] = useState(null);
  let id = useSearchParams().get("id");
  // let theData;
  let { getData } = require("../../../getData");
  getData(`http://192.168.1.3:3000/api/products/${id}`).then((result) => {
    setData(result);
  });
  return (
    <body className="bg-cyan-950">
      <div className="sticky top-0 p-3 bg-white">
        <h1 className="reddit-mono-lol text-2xl">Nile Medical</h1>
      </div>
      <br />
      <div className="md:grid grid-cols-5 text-white">
        <GoBack href={"../medicalSupplies"} />
        <div className="col-span-3">
          <br />
          {JSON.stringify(data)}
        </div>
      </div>
    </body>
  );
};
export default ms;
