import { FC } from "react";

const Blob: FC = () => {
  return (
    <div className="w-3/4 absolute -top-6 left-1/2 transform blur-[150px] md:blur-[200px] lg:blur-[300px] bg-brandAlpha -translate-x-1/2 h-96">
      <div className="bg-brandAlpha w-full h-full rounded-full"></div>
    </div>
  );
};

export default Blob;
