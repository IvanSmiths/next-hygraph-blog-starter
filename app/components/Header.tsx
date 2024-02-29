import { FC } from "react";

const Header: FC = () => {
  return (
    <section className="w-full flex justify-center pt-40">
      <div className="w-5/6 lg:w-3/6">
        <h1 className="text-2xl lg:text-3xl text-secondary">
          <strong className="font-bold text-secondaryBold">
            John Doe here, welcome to my blog.
          </strong>{" "}
          My frequent topics are about React, Next.js, HyGraph and more.
        </h1>
      </div>
    </section>
  );
};

export default Header;
