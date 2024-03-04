import { FC } from "react";

const Header: FC = () => {
  return (
    <section>
      <h1 className="text-2xl lg:text-3xl text-secondary">
        <strong className="bg-gradient-to-r from-secondaryAccent to-brand font-semibold text-transparent h-full pb-3 bg-clip-text">
          John Doe here, welcome to my blog.
        </strong>{" "}
        My frequent topics are about React, Next.js, Hygraph and more.
      </h1>
    </section>
  );
};

export default Header;
