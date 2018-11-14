function increment(x) {
  return x + 1;
}
function decrement(x) {
  return x - 1;
}
function double(x) {
  return x * 2;
}
function half(x) {
  return x / 2;
}

function pipe(...fns) {
  return function(...args) {
    return fns.reduce((reduction, fn) => fn(reduction), args);
  };
}

function compose(...fns) {
  return pipe(...fns.reverse());
}

var f = compose(
  decrement,
  double,
  increment,
  half
);
var p = pipe(
  half,
  increment,
  double,
  decrement
);

console.log(f(3) === 4);
// true

console.log(f(3) === p(3));
// true
