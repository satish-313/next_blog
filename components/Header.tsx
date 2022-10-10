import { useState } from "react";
import { NextPage } from "next";
import { BiMenu, BiX } from "react-icons/bi";
import Link from "next/link";

interface Props {}

const Header: NextPage<Props> = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="bg-yellow-400 w-full sticky top-0 h-16">
      <header className="flex justify-between p-5 max-w-6xl mx-auto">
        <div className="flex items-center">
          <Link href="/">
            <h3 className="cursor-pointer text-xl font-semibold text-neutral-900">
              Senocode.com
            </h3>
          </Link>
        </div>
        <div className="hidden md:inline-flex items-center space-x-5">
          <Link href="/category">
            <h3 className="cursor-pointer font-semibold text-neutral-700">
              Category
            </h3>
          </Link>
          <Link href="/about">
            <h3 className="cursor-pointer font-semibold text-neutral-700">
              About
            </h3>
          </Link>
          <Link href="/contact">
            <h3 className="cursor-pointer font-semibold text-neutral-700">
              Contact
            </h3>
          </Link>
        </div>
      </header>
      <div className="md:hidden fixed top-0 right-0 z-10">
        {showSidebar ? (
          <div className="min-h-screen bg-yellow-200 w-52 min-w-min flex flex-col items-center">
            <div onClick={() => setShowSidebar(!showSidebar)}>
              <BiX className="fixed top-5 right-5" size={25} />
            </div>
            <div className="relative top-10 space-y-5">
              <Link href="/category">
                <h4 className="text-xl text-gray-700 font-semibold cursor-pointer">
                  category
                </h4>
              </Link>
              <Link href="/about">
                <h4 className="text-xl text-gray-700 font-semibold cursor-pointer">
                  about
                </h4>
              </Link>
              <Link href="/contact">
                <h4 className="text-xl text-gray-700 font-semibold cursor-pointer">
                  contact
                </h4>
              </Link>
            </div>
          </div>
        ) : (
          <div
            className="relative top-5 right-5"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <BiMenu size={25} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
