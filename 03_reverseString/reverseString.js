const reverseString = function(string) {

    const arrayOfLetters = [];
    for (let i = 0; i < string.length; i++) {
        // console.log(string[i]);
        arrayOfLetters.push(string[i]);
    }

    let reversedString = "";
    const reversedArray = arrayOfLetters.reverse();

    for (let i = 0; i < arrayOfLetters.length; i++) {
        reversedString += reversedArray[i];
    }
    
    
    console.log(reversedString);
    return reversedString;
};

reverseString("hola me llamo es karem");
//get each letter seperately
//put each letter in an array
//turn array into string

// Do not edit below this line
module.exports = reverseString;
