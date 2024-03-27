const sumAll = function(val1, val2) {

    let biggestNum;
    let smallestNum;

    if (typeof val1 != "number" || typeof val2 != "number") {
        return "ERROR";
    } 
    else if (val1 < 0 || val2 < 0) {
        return "ERROR";
    }
    else if (val1 > val2) {
         biggestNum = val1;
         smallestNum = val2;
    } else {
        biggestNum = val2;
        smallestNum = val1;
    }
    const arrayToSum = [biggestNum];
    let sum = 0;
    //get all numbers and put into an array
    //add up array

    for (let i = biggestNum; i > smallestNum; i--) {
        arrayToSum.push(i-1);
    }
    console.log(arrayToSum);

    for (let i = 0; i < arrayToSum.length; i++) {
        sum += arrayToSum[i];
    }
    return sum;
};



sumAll(1,4)
// Do not edit below this line
module.exports = sumAll;
