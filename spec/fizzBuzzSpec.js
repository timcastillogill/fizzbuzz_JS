describe("FizzBuzz", function() {

  let fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  it("checks that the number three is outputs as FIZZ", function() {

    expect(fizzBuzz.print(3)).toEqual('fizz');
  });

  it("checks that the number three is outputs as BUZZ", function() {

    expect(fizzBuzz.print(5)).toEqual('buzz');
  });

});
