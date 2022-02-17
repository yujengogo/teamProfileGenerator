const Employee = require('../lib/Employee.js');

test("testing if we can set a name to an Employee", () => {
    // create a test value
    var testValue = "John";

    // the actual testing process
    const newEmployee = new Employee(testValue, 1, "john@mail.com")

    // the conclusion
    expect(newEmployee.name).toBe(testValue);
})

test("testing if we can set a id to an Employee", () => {
    // create a test value
    var testValue = 1;

    // the actual testing process
    const newEmployee = new Employee("John", testValue, "john@mail.com")

    // the conclusion
    expect(newEmployee.id).toBe(testValue);
})







test("testing if we can get a name of an Employee", () => {
    // create a test value
    var testValue = "John";

    // the actual testing process
    const newEmployee = new Employee(testValue, 1, "john@mail.com")

    // the conclusion
    expect(newEmployee.getName()).toBe(testValue);
})