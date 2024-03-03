import { FC } from "react";
import Link from "next/link";

const Navbar: FC = () => {
  return (
    <header className="w-full flex flex-col items-center z-10">
      <nav className="fixed top-6 w-10/12 z-10">
        <Link href="/">
          <img src="/logo.svg" alt="logo" height="40" width="40" />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
