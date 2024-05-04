import React from "react";
import Link from "next/link";
import "./header.css";
import { Josefin_Sans } from "next/font/google";

const josefin_sans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});
const Header = () => {
  return (
    <>
      <div className="header">
        <h1 className={josefin_sans.className}>Task Tracker</h1>
        <Link className="a" href={"/admin"}>
          Admin
        </Link>
      </div>
    </>
  );
};

export default Header;
