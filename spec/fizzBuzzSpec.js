describe("FizzBuzz", function() {

  let fizzBuzz;

  it("checks that the number three is outputs as FIZZ", function() {
    fizzBuzz = new FizzBuzz();
    expect(fizzBuzz.print(3)).toEqual('fizz');
  });

  it("checks that the number three is outputs as BUZZ", function() {
    fizzBuzz = new FizzBuzz();
    expect(fizzBuzz.print(5)).toEqual('buzz');
  });

});