import { FC } from "react";

const Navbar: FC = () => {
  return (
    <header className="w-full flex flex-col items-center z-10">
      <nav className="fixed top-6 w-5/6 lg:w-3/6">
        <img src="/logo.svg" alt="logo" height="40" width="40" />
      </nav>
    </header>
  );
};

export default Navbar;
