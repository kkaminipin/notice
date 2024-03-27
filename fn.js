const map = (list, fn) => {
  const results = [];
  for (let i = 0; i < list.length; i++) {
    results.push(fn(list[i], i, list));
  }
  return results;
};

const res = map([1, 2, 3, 4], (item) => {
  return item * 2;
});

const curryMap = (fn) => (list) => {
  return map(list, fn);
};

const twoList = curryMap((item) => {
  return item * 2;
});

twoList([1, 2, 3, 4]);
