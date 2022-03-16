const Intern = require('../lib/Intern.js');

test("testing if we can set an school to a Intern", () => {
    // create a test value
    var testValue = "NYU";

    // the actual testing process
    const newIntern = new Intern ("John", 1, "john@mail.com", testValue)

    // the conclusion
    expect(newIntern.school).toBe(testValue);
})