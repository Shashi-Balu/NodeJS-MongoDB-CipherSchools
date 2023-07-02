one();
1;
function one() {
    console.log("Normal Function");
}

let two = function () {
    console.log("Two");
};
// two();

function three(callBack) {
    callBack();
}

three(two);
