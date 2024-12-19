"use client";
import { useEffect, useState } from 'react';
import Image from "next/image";

interface NavigationItem {
  title: string;
  path: string;
}

const Header: React.FC = () => {
  const [state, setState] = useState(false);

  const navigation: NavigationItem[] = [
    { title: "Features", path: "#features" },
    { title: "Benefits", path: "#benefits" },
    { title: "Pricings", path: "#pricings" },
    { title: "Ceo", path: "#ceo" },
  ];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".menu-btn")) setState(false);
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className={`bg-black border-b border-transparent bg-opacity-25 backdrop-blur-md md:text-sm ${state ? "shadow-lg rounded-xl mx-2 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0" : ""}`}
      style={{
        borderImage: "linear-gradient(to right, transparent, #372e4d, transparent) 1",
      }}
    >
      <div className="gap-x-14 items-center max-w-screen-full mx-auto px-4 md:flex md:px-8">
        <div className="flex items-center px-10 justify-between py-4 md:block">
          <a href="javascript:void(0)">
            <Image
              src={"/logo/vyx-white.png"}
              width={30}
              height={30}
              alt="Voulty logo"
            />
          </a>
          <div className="md:hidden">
            <button
              className="menu-btn text-white hover:text-indigo-400"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div className={`flex-1 items-center mt-8 md:mt-0 md:flex ${state ? 'block' : 'hidden'}`}>
          <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => (
              <li key={idx} className="text-white hover:text-indigo-300 transition-all duration-300">
                <a href={item.path} className="block">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
            <a href="javascript:void(0)" className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium  bg-indigo-600 rounded-full md:inline-flex">
              Pre-Register
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
