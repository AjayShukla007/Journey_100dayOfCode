// this is an optimal solution and pass all the test cases of leetcode


const join = (arr1, arr2) => {
  const ob = {};
  for (const i of arr1) {
    ob[i.id] = i;
  }
  for (const i of arr2) {
    ob[i.id] = ob[i.id] ? { ...ob[i.id], ...i } : i;
  }
  return Object.values(ob);
};
