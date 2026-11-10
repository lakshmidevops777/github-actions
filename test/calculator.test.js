const calculator = require("../src/calculator");

const assert = require("assert");

console.log("Running Calculator Tests...");

assert.strictEqual(calculator.add(10, 5), 15);
assert.strictEqual(calculator.subtract(10, 5), 5);
assert.strictEqual(calculator.multiply(10, 5), 50);
assert.strictEqual(calculator.divide(10, 5), 2);

assert.throws(() => calculator.divide(10, 0));

console.log("All tests passed successfully!");
