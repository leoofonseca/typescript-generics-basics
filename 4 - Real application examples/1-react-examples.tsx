import React, { useCallback, useState } from "react";

type FunctionType = (data: { id: number }) => number;

export const Container = () => {
  const [count, setCount] = useState(2);

  const callbackFunction = useCallback(() => {}, []);

  return <></>;
};
