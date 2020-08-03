describe("array", function() {
  it ("should be made from 100 elements", function() {
    fizzbuzz = new Fizzbuzz();
    expect(fizzbuzz.array.length).toEqual(100);
  });

  it ("should have every multiple of 3 replaced with fizz", function(){
    fizzbuzz = new Fizzbuzz();
    fizzbuzz.fizzReplace();
    expect(fizzbuzz.array[2]).toEqual("Fizz");
  });

  it ("should have every multiple of 5 replaced with buzz", function(){
    fizzbuzz = new Fizzbuzz();
    fizzbuzz.buzzReplace();
    expect(fizzbuzz.array[4]).toEqual("Buzz");
  });

  it ("should have every multiple of 3 and 5 replaced with fizzbuzz", function(){
    fizzbuzz = new Fizzbuzz();
    fizzbuzz.fizzbuzzReplace();
    expect(fizzbuzz.array[14]).toEqual("FizzBuzz");
  });

  it ("should run the entire fizzbuzz application", function(){
    fizzbuzz = new Fizzbuzz();
    fizzbuzz.fizzReplace();
    fizzbuzz.buzzReplace();
    fizzbuzz.fizzbuzzReplace();
    expect(fizzbuzz.array[14]).toEqual("FizzBuzz");
    expect(fizzbuzz.array[24]).toEqual("Buzz");
    expect(fizzbuzz.array[32]).toEqual("Fizz");
  });
});
