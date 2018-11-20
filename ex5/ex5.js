function foo(n1, n2) {
  return function add() {
    return n1 + n2;
  };
}

var x = foo(3, 4);

console.log(x());
console.log(x());
