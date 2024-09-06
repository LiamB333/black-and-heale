"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaChevronDown } from "react-icons/fa";
import MobileMenu from "./MobileMenu";
import Button from "./Button";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative z-50">
      <div className="flex flex-col justify-center px-16 py-4 text-base leading-6 border-0 border-black border-solid max-md:px-5">
        <div className="flex gap-5 justify-between items-center w-full max-md:flex-wrap max-md:mr-1 max-md:max-w-full">
          <Link href="/">
            <Image
              src="/icons/logo-white.svg"
              alt="Grip Gear logo"
              width={220}
              height={60}
              priority
            />
          </Link>
          <div className="hidden flex-1 justify-center lg:flex">
            <div className="flex gap-5 text-white max-md:flex-wrap">
              <Link href="/services">
                <div className="hover:text-[#9CAE47] duration-300">
                  Services
                </div>
              </Link>
              <Link href="/projects">
                <div className="hover:text-[#9CAE47] duration-300">
                  Projects
                </div>
              </Link>
              {/*
                <div className="absolute left-0 hidden group-hover:block border text-white border-gray-300 shadow-lg">
                  <Link href="/commercial">
                    <div className="px-4 py-2">Commercial</div>
                  </Link>
                  <Link href="/private">
                    <div className="px-4 py-2">Private</div>
                  </Link>
                </div>
                */}
              <Link href="/about">
                <div className="hover:text-[#9CAE47] duration-300">About</div>
              </Link>
              <Link href="/contact">
                <div className="hover:text-[#9CAE47] duration-300">Contact</div>
              </Link>
            </div>
          </div>
          <div className="hidden lg:block text-white">
            <Link href="/services">
              <Button variant="secondary">Learn More</Button>
            </Link>
          </div>
          <div className="lg:hidden">
            <FaBars
              className="text-white w-6 h-6 cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
        </div>
      </div>
      <MobileMenu isOpen={isMenuOpen} onClose={toggleMenu} />
    </div>
  );
}

export default NavBar;
