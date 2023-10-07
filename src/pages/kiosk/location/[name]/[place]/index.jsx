import { useSearchParams } from "next/navigation";
import React from "react";

const index = () => {
  const params = useSearchParams();
  const name = params.get("place");
  return <div>{name}</div>;
};

export default index;
