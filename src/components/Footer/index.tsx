"use client";

import logo from "@/assets/brand/logo.png";
import Image from "next/image";

function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-[1200px] items-center justify-center py-10">
      <Image src={logo} alt="logo" width={270} height={57} />
    </footer>
  );
}

export default Footer;
