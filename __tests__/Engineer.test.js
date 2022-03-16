const Engineer = require('../lib/Engineer.js');

test("testing if we can set an github account to a Engineer", () => {
    // create a test value
    var testValue = "abcdef";

    // the actual testing process
    const newEngineer = new Engineer ("John", 1, "john@mail.com", testValue)

    // the conclusion
    expect(newEngineer.github).toBe(testValue);
})