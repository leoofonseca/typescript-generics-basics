export const addHoursAndMinutesToEntity = (entity: { date: Date }) => {
  const { date } = entity;
  //       ^?

  return {
    ...entity,
    hours: 9,
    minutes: 15,
  };
};

const example1 = addHoursAndMinutesToEntity({ date: new Date() });
//     ^?
const example2 = addHoursAndMinutesToEntity({
  //     ^?
  id: 1,
  date: new Date(),
  foo: "bar",
});
