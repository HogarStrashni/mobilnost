export const allCategories = Array(8)
  .fill(undefined)
  .map((_, idx) => ({
    name: "category" + "-" + (idx + 1),
  }));
