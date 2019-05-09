/* 
  Write a method, digitalRoot(number). It should sum the digits of a positive integer. 
  If it is greater than or equal to 10, sum the digits of the resulting number. 
  Keep repeating until there is only one digit in the result, called the "digital root". 

  For example, if the number is 78, 
  7 + 8 = 15 ... 5 + 1 = 6

  DO NOT use string conversion within your method.
*/ 

//declare a sum store it in a variable
//divide number by highest tens place
//add output to sum
//lower 10s place by one
//repeat until no more tens places
//add final number
//return final number mod 10

const digitalRoot = (number) => {
  // check for negs
  var sum = 11;

  while (sum > 10) {
    sum = 0;
    // need right way to stop loop
    while (number) {
      sum += Math.floor(number % 10);
      console.log(sum)
      Math.floor(number /= 10);
     //console.log(number)
    }
    
  }
  /* solution after interview
  const digitalRoot = (number) => {
    let sum;
    do {
      sum = 0;
      while (number > 0) {
        sum += Math.floor(number % 10);
        number = Math.floor(number / 10);
      }
      console.log(sum)
      number = sum;
    } while (sum >= 10);
    return sum;
  }
*/
}
console.log( digitalRoot( 142 ))




// Don't edit below this line
console.log( digitalRoot(0)           == 0 );
console.log( digitalRoot(1)           == 1 );
console.log( digitalRoot(9)           == 9 );
console.log( digitalRoot(78)          == 6 );
console.log( digitalRoot(100)         == 1 );
console.log( digitalRoot(142)         == 7 );
console.log( digitalRoot(1424)        == 2 );
console.log( digitalRoot(56734)       == 7 );
console.log( digitalRoot(967335)      == 6 );
console.log( digitalRoot(95395367335) == 4 );