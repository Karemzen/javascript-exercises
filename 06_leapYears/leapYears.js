const leapYears = function(year) {

    if (year % 100 === 0) { //years divisible by 100 arent leap years
        if (year % 400 ===0) {
            return true
        }
        return false
    }

    

    else if (year % 4 === 0) { //leap years are divisible by four
        return true
    }
     

    else return false
    
};

leapYears(2000);
// Do not edit below this line
module.exports = leapYears;
