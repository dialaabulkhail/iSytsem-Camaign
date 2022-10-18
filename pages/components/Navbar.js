import React from "react";
import Image from "next/image";
import Logo from "../../public/logo.webp";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" bg-darkBlue h-20">
      <div className="text-center">
        <Link href="/Main">
          <Image src={Logo} className="cursor-pointer" width={200} height={75}  />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
