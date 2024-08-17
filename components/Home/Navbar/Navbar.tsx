import { navLinks } from "@/constants/Constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiUser, BiWallet } from "react-icons/bi";
import { FaBars } from "react-icons/fa";

type Props = {
  openNav: () => void
}

const Navbar = ({openNav}: Props) => {
  return (
    <div className="w-full h-[13vh]">
      <div className="w-[95%] sm:w-[85%] md:w-[80%] h-full mx-auto flex items-center justify-between">
        <Image src={"/images/logo.png"} alt="" width={180} height={180} />
        <div className="lg:flex hidden items-center space-x-10">
          {navLinks.map((link) => {
            return (
              <Link href={link.url} key={link.id}>
                <p className="text-lg font-semibold cursor-pointer hover:text-blue-800 transition-all duration-200 text-grey-900">
                  {link.label}
                </p>
              </Link>
            );
          })}
        </div>
        <div className="flex items-center space-x-8">
          <BiWallet className="w-6 h-6 cursor-pointer hover:text-red-600" />
          <BiUser className="w-6 h-6 cursor-pointer hover:text-red-600" />
          <FaBars onClick={openNav} className="w-6 h-6 cursor-pointer hover:text-red-600 lg:hidden" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
