"use client";
import "../app/globals.css";
import Header from "./header";
import Body from "./body";
import { usePathname } from "next/navigation";
const Layout2 = ({childern}) => {
  let path = usePathname();
  let currentPage = "/";
  if(path == "/" || path == "/about" || path == "/contact-us" || path == "/product"){
    path == "/"
    ? (currentPage = "home")
    : path == "/about"
    ? (currentPage = "about")
    : path == "/contact-us"
    ? (currentPage = "contactUs")
    : path == "/product"
    ? (currentPage = "product"):"";
      return (
    <div className="md:grid md:grid-cols-5">
      <div className="text-cyan-950 text-xl md:col-span-1 sticky top-0 bg-white">
        <h1 className="p-5 reddit-mono-lol text-2xl">Nile Medical</h1>
        <Header pageName={currentPage} />
      </div>

      <div className="md:col-span-4 bg-cyan-950 min-h-screen md:rounded-tl-3xl p-5">
        <Body pageName={currentPage} />
      </div>
    </div>
  );
}else {
    return(<body>{childern}</body>);
  }
};
export default Layout2;
