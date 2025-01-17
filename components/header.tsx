import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/80 via-transparent to-transparent backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-16">

          <div className="flex space-x-6">
            <a href="#section1" className="text-gray-200 hover:text-white font-medium">
              About Us
            </a>
            <a href="#section2" className="text-gray-200 hover:text-white font-medium">
              Objetives
            </a>
            <a href="#section3" className="text-gray-200 hover:text-white font-medium">
              Plans
            </a>
          </div>


          <div className="flex justify-center">
            <Link href="/">
              <Image src="/logo/SplayBlue.png" alt="splay" width={130} height={130} />
            </Link>
          </div>


          <div className="flex justify-end space-x-4">
            <button className="text-gray-200 hover:text-white font-medium">
              Register
            </button>
            <button className="text-gray-200 hover:text-white font-medium">
              Login
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
