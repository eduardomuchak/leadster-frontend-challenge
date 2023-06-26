"use client";

import logo from "@/assets/brand/logo.png";
import Image from "next/image";

function Header() {
  return (
    <header className="flex h-32 w-full items-center justify-center">
      <Image src={logo} alt="logo" width={200} height={45} />
    </header>
  );
}

export default Header;
