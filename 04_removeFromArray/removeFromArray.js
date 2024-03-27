var removeFromArray = function(array, ...args) {

    
    const bob = array.filter(element => !args.includes(element))
    console.log(bob)
    return bob;

    const isNotNumber = array.filter(element => element != args)

    console.log(isNotNumber);
    return isNotNumber;
//     for (i = 0; i < array.length-1; i++) {
        
//         if (array[i].equals(toRemove) ) {
//             array.splice(i, 1)
//         }

        
//     }

 };

 removeFromArray([1,2,3,4], 1, 3)

// Do not edit below this line
module.exports = removeFromArray;
