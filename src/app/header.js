import Btn from "./headerbtn";
import Link from "next/link";

function Header({ pageName }) {
  return (
    <div className="flex justify-between text-sm md:text-base md:block">
      <Link href="./">
        <Btn name="Home" activation={pageName === "home"} />
      </Link>
      <Link href="./about">
        <Btn name="About" activation={pageName === "about"} />
      </Link>

      <Link href="./product">
        <Btn name="Product" activation={pageName === "product"} />
      </Link>

      <Link href="./contact-us">
        <Btn name="Contact Us" activation={pageName === "contactUs"} />
      </Link>
    </div>
  );
}
export default Header;
