export function sampleFunction(param: string) {
  return [param, param];
}

const withoutGenerics = sampleFunction("sample");
//         ^?

export function sampleFunctionWithGenerics(param) {
  return [param, param];
}

const withGenerics = sampleFunctionWithGenerics(123456);
//         ^?
