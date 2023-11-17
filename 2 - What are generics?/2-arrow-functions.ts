export const sampleArrowFunction = (param: string) => {
  return [param, param];
};

const withoutGenerics = sampleArrowFunction("sample");
//         ^?

export const sampleArrowFunctionWithGenerics = (param) => {
  return [param, param];
};

const withGenerics = sampleArrowFunctionWithGenerics(123456);
//         ^?
