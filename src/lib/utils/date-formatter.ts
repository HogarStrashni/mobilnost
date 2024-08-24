const helper = (num: number) => (num < 9 ? "0" + num : num);

export const formatDate = (date: string) => {
  const newDate = new Date(date);

  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1;
  const day = newDate.getDate();

  return `${helper(day)}.${helper(month)}.${year}.`;
};
