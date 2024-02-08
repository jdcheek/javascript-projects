// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function() {
  // Write your unit tests here!
  test('check the value of organization is "nonprofit"', function() {
    expect(launchcode.organization).toBe('nonprofit');
  });
  test('check the value of executiveDirector is "Jeff"', function() {
    expect(launchcode.executiveDirector).toBe('Jeff');
  });
  test('check the value of percentageCoolEmployees is "100%"', function() {
    expect(launchcode.percentageCoolEmployees).toBe('100%');
  });
});
