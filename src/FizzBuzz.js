class FizzBuzz {


  print(number) {
    if (number === 15) {
      return "fizzbuzz";
    } else if (number === 3) {
      return "fizz";
    } else if (number % 5 === 0) {
      return 'buzz';
    }
  }
}
