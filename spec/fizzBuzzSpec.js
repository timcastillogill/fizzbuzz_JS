describe("FizzBuzz", function() {

  let fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  it("checks that the number twenty-five is outputs as BUZZ", function() {

    expect(fizzBuzz.print(25)).toEqual('buzz');
  });

  it("checks that the number three is outputs as FIZZ", function() {

    expect(fizzBuzz.print(3)).toEqual('fizz');
  });

  it('checks that the number 15 is outputs as FizzBuzz', function() {

    expect(fizzBuzz.print(15)).toEqual('fizzbuzz');
  });

  it('checks that the number 12 outputs as FIZZ', function() {
    expect(fizzBuzz.print(12)).toEqual('fizz');
  });

  it('checks that the number 30 outpust as FizzBuzz', function() {

    expect(fizzBuzz.print(30)).toEqual('fizzbuzz');
  });

});
