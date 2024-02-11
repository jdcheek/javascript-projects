const checkFive = require('../checkFive.js');

describe("checkFive", function() {

  test("returns 5 is equal to 5", function() {
    let output = checkFive(5);
    expect(output).toEqual("5 is equal to 5.");
  });

  test("returns 2 is equal to 5", function() {
    let output = checkFive(2);
    expect(output).toEqual("2 is less than 5.");
  });
});
