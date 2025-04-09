// Task2
function customMap<T, R>(arr: T[], fun: (val: T, idx: number, array: T[]) => R): R[] {
  const result: R[] = [];
  arr.forEach((val, idx, array) => result.push(fun(val, idx, array)));
  return result;
}
