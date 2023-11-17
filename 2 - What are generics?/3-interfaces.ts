export interface SampleInterface {
  id: number;
  label: string;
  value: number;
}

const withoutGenerics: SampleInterface = {
  id: 1,
  label: "sample",
  value: 1234,
  // ^?
};

export interface SampleInterfaceWithGenerics {
  id: number;
  label: string;
  value: T;
}

const withGenerics: SampleInterfaceWithGenerics = {
  id: 2,
  label: "example",
  value: { foo: "bar" },
  // ^?
};
