import Link from "next/link";

export default function GoBack({href}) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <Link href={href} className="cursor-pointer">
        <div className="inline-block">
          <div className=" border-white text-white border-2 rounded-full h-10 pl-3 pr-3 justify-center flex items-center cursor-pointer shadow-md ml-4 hover:scale-105 transition-all">
            <span class="material-symbols-outlined"> arrow_back </span>GoBack
          </div>
        </div>
      </Link>
    </>
  );
}
