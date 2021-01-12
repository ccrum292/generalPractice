// ! Multiples of 3 or 5

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// const solution = startNum => {

//   let sumOfMultiples = 0;

//   for(let i = 0; i < startNum; i++) {
//     if (i % 3 === 0 || i % 5 === 0) sumOfMultiples += i;  
//   }

//   return sumOfMultiples;
// }


// ! Move Zeros 

// Implement a function move_zeros which takes two arguments first an array of numbers arrNum and second a Boolean value isRight (default is true) and returns the array with all zero to right if isRight is true else to left if isRight is false.

// const move_zeros = (arrNum, isRight = true) => {

//   const zerosArr = [];
//   const otherNumsArr = [];

//   for (const val of arrNum) {
//     if (val === 0) zerosArr.push(val)
//     else otherNumsArr.push(val);
//   }

//   if (isRight) return [...otherNumsArr, ...zerosArr]
//   else return [...zerosArr, ...otherNumsArr];
// }

// ! Does my Number Look Big in This? 

const narcissistic = value => {
  const valueArr = value.toString().split("")
  const calculatedTotal = valueArr.reduce((total, currentVal) => {
    console.log(currentVal, parseInt(currentVal));
    return total + (parseInt(currentVal) ** valueArr.length) 
  }, 0)

  if (calculatedTotal === value) return true
  return false
}

narcissistic(153)