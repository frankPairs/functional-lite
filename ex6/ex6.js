function mult(mul, ...nums) {
  if (nums.length === 0) return mul;
  return mul * mult(...nums);
}

console.log(mult(3, 4, 5)); // 60

console.log(mult(3, 4, 5, 6)); // 360
