function num(n) {
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

function addnLoop(...fns) {
  while (fns.length > 2) {
    const [fn0, fn1, ...rest] = fns;

    fns = [() => add2(fn0, fn1), ...rest];
  }

  return add2(fns[0], fns[1]);
}

function addnRecursion(fnResult, fn, ...fns) {
  if (fn === undefined) {
    return fnResult();
  }

  if (fns.length === 0) {
    return add2(fnResult, fn);
  }

  return addnRecursion(() => add2(fnResult, fn), ...fns);
}

function addnArrayHelpers(...fns) {
  return fns.reduce((fn0, fn1) => () => add2(fn0, fn1))();
}

console.log(addnLoop(num(10), num(20), num(5)));
console.log(addnRecursion(num(10), num(20), num(5), num(4)));
console.log(addnArrayHelpers(num(10), num(20), num(5), num(4)));
