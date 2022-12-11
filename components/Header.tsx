import type { NextPage } from "next";
import { useRef, useState, MouseEvent } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import Link from "next/link";

interface Props {}

const Header: NextPage<Props> = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const navBg = useRef(null);

  const closeNavBg = (e: MouseEvent) => {
    if (navBg.current === e.target) {
      setShowSidebar(!showSidebar);
    }
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full sticky top-0 h-16">
      <header className="flex justify-between p-5 max-w-5xl mx-auto">
        <div className="flex items-center">
          <Link href="/">
            <h3 className="cursor-pointer text-xl font-bold text-gray-200">
              Senocode.com
            </h3>
          </Link>
        </div>
        <div className="hidden md:inline-flex items-center space-x-5">
          <Link href="/tag">
            <h3 className="cursor-pointer font-bold text-gray-700">Category</h3>
          </Link>
          <Link href="/about">
            <h3 className="cursor-pointer font-bold text-gray-700">About</h3>
          </Link>
          <Link href="/contact">
            <h3 className="cursor-pointer font-bold text-gray-700">Contact</h3>
          </Link>
        </div>

        {showSidebar ? (
          <div
            ref={navBg}
            onClick={(e) => closeNavBg(e)}
            className="md:hidden fixed inset-0 z-10"
          >
            <div className="absolute top-0 right-0 bg-pink-600 min-h-screen">
              <BiX
                className="cursor-pointer fixed right-5 top-5"
                onClick={() => setShowSidebar(!showSidebar)}
                color="white"
                size={25}
              />
              <div className="px-14 mt-14 mb-8">
                <Link href="/tag">
                  <h4 className="text-xl text-white font-bold cursor-pointer mt-2">
                    category
                  </h4>
                </Link>
                <Link href="/about">
                  <h4 className="text-xl text-white font-bold cursor-pointer mt-2">
                    about
                  </h4>
                </Link>
                <Link href="/contact">
                  <h4 className="text-xl text-white font-bold cursor-pointer mt-2">
                    contact
                  </h4>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="md:hidden fixed top-5 right-5 cursor-pointer">
            <BiMenu onClick={() => setShowSidebar(!showSidebar)} size={25} />
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;