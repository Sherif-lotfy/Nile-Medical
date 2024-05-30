"use client";
import { useState } from "react";
import Btn from "./headerbtn";
import Link from "next/link";

function Header( {pageName}) {
    // const [activeSection, setActiveSection] = useState("home");

    // const change = (section) => {
    //     // setActiveSection(section);
    // };
    // onClick={() => change("home")}
    return (
        <div className="flex justify-between md:block">
            <Link href="./">

                <Btn name="Home" activation={pageName === "home"} />
            </Link>
            <Link href="./brochure">
                <Btn name="Brochure" activation={pageName === "brochure"} />
            </Link>
            <Link href="./contact-us">
                <Btn name="Contact Us" activation={pageName === "contactUs"} />
            </Link>
        </div>
    );
}
export default Header;
