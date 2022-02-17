const Manager = require('../lib/Manager.js');

test("testing if we can set an officeNumber to a Manager", () => {
    // create a test value
    var testValue = "12345";

    // the actual testing process
    const newManager = new Manager("John", 1, "john@mail.com", testValue)

    // the conclusion
    expect(newManager.officeNumber).toBe(testValue);
})