import Sections from "../sections";
import Link from "next/link";
const ProductBody = () => {
  return (
    <div className=" h-screen overflow-scroll">
      <Link href={"../product/medicalSupplies"}>
        <Sections name={"medicalSupplies"} />
      </Link>
      <Link href={"../product/mobilityAids"}>
        <Sections name={"mobilityAids"} />
      </Link>
      <Link href={"../product/prosthesis"}>
        <Sections name={"prosthesis"} />
      </Link>
    </div>
  );
};
export default ProductBody;
