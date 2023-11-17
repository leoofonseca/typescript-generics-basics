import React from "react";

export interface SampleComponentProps {
  title: string;
  subtitle: string;
  object: object;
}

export const WithoutGenerics = (props: SampleComponentProps) => {
  return <></>;
};

const Example1 = () => {
  return <WithoutGenerics title="" subtitle="" object={{ id: 1 }} />;
  //                                              ^?
};

export interface SampleComponentWithGenericsProps {
  title: string;
  subtitle: string;
  object: any;
}

export const WithGenerics = (props: SampleComponentWithGenericsProps) => {
  return <></>;
};

const Example2 = () => {
  return <WithGenerics title="" subtitle="" object={{ id: 1 }} />;
  //                                          ^?
};
