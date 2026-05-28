// Q1: Find the index of target in array
// let arr = [2,10,8,6,19,7]

// function findNumber(arr, target){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === target){
//             return i
//         }
//     }
//     return -1
// }

// console.log(findNumber(arr, 2));

// Q2: Find total negative numbers in an array
// function countNegative(arr){
//   let numbers = 0;
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] < 0){
//       numbers++
//     }
//   }
//   return numbers
// }

// let arr = [-1, 2, -4, 6, 7, -9]

// console.log(countNegative(arr))

// Q3: Find the largest number in an array
// function findLargest(arr){
//   let largest = Number.NEGATIVE_INFINITY
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] > largest){
//       largest = arr[i]
//     }
//   }
//   return largest
// }

// let arr = [-1, -4, -6, -7, -9]
// console.log(findLargest(arr))

// Q4: Find the smallest number in an array
// function findSmallest(arr){
//   let smallest = Number.POSITIVE_INFINITY
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] < smallest){
//       smallest = arr[i]
//     }
//   }
//   return smallest
// }

// let arr = [-1, -4, -6, -7, -9]
// console.log(findSmallest(arr))

// Q5: Find the second largest number in an array
// function findSecondLargest(arr){
//   if(arr.length < 2) return null /* edge case */
//   let largest = Number.NEGATIVE_INFINITY
//   let secondLargest = Number.NEGATIVE_INFINITY
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] > largest){ /* checking if current element is greater than largest */
//      secondLargest = largest 
//      largest = arr[i]
//     } else if(arr[i] < largest && arr[i] > secondLargest){ /* checking if current element is less than largest but greater than second largest */
//       secondLargest = arr[i]
//     }
//   }
//   return secondLargest
// }

// let arr = [1, 4, 6, 7,11, 9]
// console.log(findSecondLargest(arr))

// Q6: How loop within a loop works
//   for(let j = 0; j < 3; j++){ /* This loop will run 3 times for each iteration of the outer loop */
//     console.log(`i: ${i}, j: ${j}`) /* this will print all combinations of i and j */
//   }
// }
// In total this will print 9 combinations of i and j (0,0), (0,1), (0,2), (1,0), (1,1), (1,2), (2,0), (2,1), (2,2)

// Q7: Find the count of digits in a number
// function countDigits(num){
//     if(num === 0) return 1 /* edge case */
//     num = Math.abs(num) /* this will convert negative number to positive number */
//     let count = 0;
//     while (num > 0){
//         num = Math.floor(num / 10); /* this will remove the last digit of the number */
//         count++
//     }
//     return count
// }

// console.log(countDigits(259))

// Q8: Find the number is Palindrome or not (Leetcode Q9)
var isPalindrome = function(x) {
    if(x < 0) return false;
    let xCopy = x;
    let rev = 0;
    while(x > 0){
        let rem = x % 10;
        rev = rev * 10 + rem
        x = Math.floor(x/10)
    }
    return xCopy === rev
};
