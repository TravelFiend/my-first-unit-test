import isEven from '../is-even.js';
const test = QUnit.test;

test('returns true if number is 8', function (assert) {
    //Arrange
    // Set up your parameters and expectations
    const number = 8;
    const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = isEven(number);

    //Assert -- assert is built in
    // What should the result be?
    //format is: assert.equal(actual, expected)
    assert.equal(result, expected);
});

test('returns false if number is 3', function (assert) {
    //Arrange
    // Set up your parameters and expectations
    const number = 3;
    const expected = false;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = isEven(number);

    //Assert -- assert is built in
    // What should the result be?
    //format is: assert.equal(actual, expected)
    assert.equal(result, expected);
});









// is test a predefined function?