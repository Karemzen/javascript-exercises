const repeatString = function(text, times) {

    if (times < 0) {
        return "ERROR";
    }
    let empty = "";
    for (let i =0; i < times; i++) {
        empty = empty + text;
    }
    return empty;
    
};

repeatString("hey", -1)
// Do not edit below this line
module.exports = repeatString;
