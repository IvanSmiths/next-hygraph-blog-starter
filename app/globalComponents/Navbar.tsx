import { FC } from "react";
import Link from "next/link";

const Navbar: FC = () => {
  return (
    <header className="w-full h-fit flex flex-col items-center z-10">
      <nav className="fixed sm:top-6 bottom-8 sm:right-auto right-8 h-fit sm:w-10/12 w-fit z-10">
        <Link className="inline-block w-fit" href="/">
          <img src="/logo.svg" alt="logo" height="40" width="40" />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
