class FizzBuzz {
  play(number) {
    if (number % 15 === 0) {
      return "fizz-buzz";
    } else if (number % 5 === 0) {
      return "buzz";
    } else if (number % 3 === 0) {
      return "fizz";
    } else return number;
  }
}
module.exports = FizzBuzz;
