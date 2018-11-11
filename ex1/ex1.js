function foo(x, y) {
  return x * y;
}

function bar(x, y) {
  y++;
  return foo(x, y);
}

console.log(bar(20, 5)); // 120

console.log(bar(25, 6)); // 175
