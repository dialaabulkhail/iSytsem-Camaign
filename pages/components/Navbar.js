import React from "react";
import Image from "next/image";
import Logo from "../../public/logo.webp";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" bg-[#2b498e] h-16  ">
      <Link href="/Main">
        <Image src={Logo} className="cursor-pointer" />
      </Link>
    </div>
  );
};

export default Navbar;
