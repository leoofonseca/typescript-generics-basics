export type SampleType = {
  id: number;
  label: string;
  value: number;
};

const withoutGenerics: SampleType = {
  id: 1,
  label: "sample",
  value: 1234,
  // ^?
};

export type SampleTypeWithGenerics = {
  id: number;
  label: string;
  value: any;
};

const withGenerics: SampleTypeWithGenerics = {
  id: 2,
  label: "example",
  value: { foo: "bar" },
  // ^?
};
