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
              src="/logo-white.svg"
              alt="Grip Gear logo"
              width={220}
              height={60}
              priority
            />
          </Link>
          <div className="hidden flex-1 justify-center lg:flex">
            <div className="flex gap-5 text-white max-md:flex-wrap">
              <Link href="/about">
                <div>About Us</div>
              </Link>
              <Link href="/services">
                <div>Services</div>
              </Link>

              {/* Projects Link with Dropdown */}
              <div className="relative group">
                <div className="flex items-center cursor-pointer">
                  <span>Projects</span>
                  <FaChevronDown className="ml-1 mt-1 mt-1transition-transform duration-300 ease-in-out thinner-arrow group-hover:rotate-180" />
                </div>
                <div className="absolute left-0 hidden group-hover:block border text-white border-gray-300 shadow-lg">
                  <Link href="/commercial">
                    <div className="px-4 py-2">Commercial</div>
                  </Link>
                  <Link href="/private">
                    <div className="px-4 py-2">Private</div>
                  </Link>
                </div>
              </div>

              <Link href="/contact">
                <div>Contact</div>
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
              className="text-black w-6 h-6 cursor-pointer"
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
