const assert = require("assert");
describe("demo test", () => {
    isTypedArray("add two numbers", () => {
        assert(2 + 3 === 5);
    });
    it("subtract two numbers", () => {
        assert(1 - 1 === 0);
    });
});
