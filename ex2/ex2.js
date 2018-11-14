function when(fn) {
  return function(predicate) {
    return function(...args) {
      if (predicate(...args)) {
        return fn(...args);
      }
    };
  };
}

function not(predicate) {
  return function(...args) {
    return !predicate(...args);
  };
}

function output(txt) {
  console.log(txt);
}

function isShortEnough(str) {
  return str.length <= 5;
}

var msg1 = 'Hello';
var msg2 = msg1 + ' World';
var printIf = when(output);
var isLongEnough = not(isShortEnough);

printIf(isShortEnough)(msg1); // Hello
printIf(isShortEnough)(msg2);
printIf(isLongEnough)(msg1);
printIf(isLongEnough)(msg2); // Hello World
