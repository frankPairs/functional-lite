function constant(n) {
  return function() {
    return n;
  };
}

function add(num1, num2) {
  return num1 + num2;
}

function add2(fn1, fn2) {
  return add(fn1(), fn2());
}

function addnLoop(fns) {
  while (fns.length > 2) {
    const [fn0, fn1, ...rest] = fns;

    fns = [() => add2(fn0, fn1), ...rest];
  }

  return add2(fns[0], fns[1]);
}

function addnRecursion([fnResult, fn, ...fns]) {
  if (fn === undefined) {
    return fnResult();
  }

  if (fns.length === 0) {
    return add2(fnResult, fn);
  }

  return addnRecursion([() => add2(fnResult, fn), ...fns]);
}

function addnArrayHelpers(fns) {
  return fns.reduce((fn0, fn1) => () => add2(fn0, fn1))();
}

const arrNumbers = [1, 2, 2, 5, 7, 7, 9, 21, 54, 232, 28, 39, 39];

console.log(addnLoop([constant(10), constant(20), constant(5)]));
console.log(
  addnRecursion([constant(10), constant(20), constant(5), constant(4)])
);
console.log(
  addnArrayHelpers([constant(10), constant(20), constant(5), constant(4)])
);

console.log(
  addnRecursion(
    arrNumbers
      .reduce(
        (uniqueArr, num) =>
          uniqueArr.includes(num) ? uniqueArr : uniqueArr.concat(num),
        []
      )
      .filter(num => num % 2 === 0)
      .map(num => constant(num))
  )
);
