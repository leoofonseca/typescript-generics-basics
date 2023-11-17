import React from "react";

interface SampleFrontendFormProps {
  schema: object;
  onSubmit: (data: object) => void;
}

export const SampleFrontendForm = (_props: SampleFrontendFormProps) => {
  return <></>;
};

// Example 1
type Schema1 = { id: number; label: string; date: Date };

export const Example1 = () => {
  const schema: Schema1 = { id: 1, label: "label", date: new Date() };

  return (
    <SampleFrontendForm
      schema={schema}
      //       ^?
      onSubmit={(data) => {
        //        ^?
        const cast = data as Schema1;
        //     ^?
      }}
    />
  );
};
