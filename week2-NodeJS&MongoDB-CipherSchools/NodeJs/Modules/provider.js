let counter = (arr) => {
    return "This array has " + arr.length + " items";
};

let addition = (a, b) => {
    return `The sum is ${a + b}`;
};

const constant = 9.76543;

module.exports = { counter, addition, constant };

// module.exports.counter = counter;
// module.exports.addition = addition;
// module.exports.constant = constant;

// module.exports = {
//     counter:counter,
//     addition:addition,
//     constant:constant
// };
