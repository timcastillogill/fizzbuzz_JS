describe("FizzBuzz", function() {

  let fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  it("checks that the number three is outputs as FIZZ", function() {

    expect(fizzBuzz.print(3)).toEqual('fizz');
  });

  it("checks that the number five is outputs as BUZZ", function() {

    expect(fizzBuzz.print(5)).toEqual('buzz');
  });

  it('checks that the number 15 is outputs as FizzBuzz', function() {

    expect(fizzBuzz.print(15)).toEqual('fizzbuzz');
  });

});
