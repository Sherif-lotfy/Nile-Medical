import Componant from "./componant";
import "../../globals.css";
import Link from "next/link";
import GoBack from "../../GoBack";

const MedicalSupplies = async () => {
  let data = await fetch("http://192.168.1.3:3000/api/products", {
    method: "GET",
    cache: "no-cache",
  });
  let res = await data.json();
  return (
    <body className="bg-cyan-950">
      <div className="sticky top-0 p-3 bg-white">
        <Link href={"../../"}>
          <h1 className=" reddit-mono-lol text-2xl">Nile Medical</h1>
        </Link>
      </div>
      <br />
      <GoBack href={"../product"} />
      <br />
      <br />
      <div className="grid md:grid-cols-3 grid-cols-2 gap-2 justify-items-center text-white">
        {res.map(function (d) {
          return (
            <Link
              href={{
                pathname: "medicalSupplies/ms",
                query: { id: `${d._id}` },
              }}
              className="w-full flex justify-center"
            >
              <Componant price={d.price} productName={d.productName} />
            </Link>
          );
        })}
      </div>
    </body>
  );
};
export default MedicalSupplies;
