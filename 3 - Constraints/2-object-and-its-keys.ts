const getObjectPropertyValue = (object: any, key: string) => {
  return object[key];
};

// We can't pass anything but objects in the first param
const example1 = getObjectPropertyValue("string", "id");

// What if we could list only this object's properties as the second param?
const example2 = getObjectPropertyValue(
  { id: 1, value: "hello there" },
  "unknownProperty"
);
