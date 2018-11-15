function lotteryNum() {
  return (Math.round(Math.random() * 100) % 58) + 1;
}

function pickNumber(arr) {
  var newArr = arr;
  var num = null;

  do {
    num = lotteryNum();
  } while (newArr.includes(num));

  newArr.push(num);
  newArr.sort((x, y) => x > y);

  return newArr;
}

var luckyLotteryNumbers = [];

for (var i = 0; i < 6; i++) {
  luckyLotteryNumbers = pickNumber(luckyLotteryNumbers);
}

console.log(luckyLotteryNumbers);
