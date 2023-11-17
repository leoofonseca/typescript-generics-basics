interface WithConstraints<ValueType> {
  value: ValueType;
}

const LengthPrinter = <ValueType,>({ value }: WithConstraints<ValueType>) => {
  return <>{value.length}</>;
  //                ^?
};

const Example = () => {
  return <LengthPrinter value={[1]} />;
};
