import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="flex flex-col gap-16 bg-black p-16">
      <Image
        className="mx-auto"
        src="/BossShoesLogo.svg"
        width={100}
        height={100}
        alt="Logo"
      />
      <div className="flex flex-col justify-evenly items-center lg:flex-row">
        <h3>Terms Of Service</h3>
        <h3>Privacy Policy</h3>
        <h3>Security</h3>
        <h3>FAQ</h3>
      </div>
      <div className="relative flex flex-col justify-between items-center lg:flex-row gap-4">
        <p>English</p>
        <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-4 -top-8 lg:top-0">
          <p>FB</p>
          <p>TW</p>
          <p>LI</p>
          <p>IN</p>
        </div>
        <p className="text-center">BOSS SHOES © All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
