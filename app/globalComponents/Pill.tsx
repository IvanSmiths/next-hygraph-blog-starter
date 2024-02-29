import React, { FC } from "react";

type PillProps = {
  label: string;
};

const Pill: FC<PillProps> = ({ label }) => {
  return <span className="bg-primary p-3 rounded-xl w-fit">{label}</span>;
};

export default Pill;
