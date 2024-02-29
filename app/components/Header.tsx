import { FC } from "react";

const Header: FC = () => {
  return (
    <section>
      <h1 className="text-2xl lg:text-3xl text-secondary">
        <strong className="font-bold text-secondaryAccent">
          John Doe here, welcome to my blog.
        </strong>{" "}
        My frequent topics are about React, Next.js, HyGraph and more.
      </h1>
    </section>
  );
};

export default Header;
