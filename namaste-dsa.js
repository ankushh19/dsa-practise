// ? Loops

// Find the index of target in array
// let arr = [2,10,8,6,19,7]

// function findNumber(arr, target){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === target){
//             return i
//         }
//     }
//     return -1
// }

// console.log(findNumber(arr, 1));

// Function that returns negative numbers in an array
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

// Function that return the largest number in an array
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

// Function that return the smallest number in an array
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

// Find the second largest number in an array
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

// Loop within a loop
for(let i = 0; i < 3; i++){
  for(let j = 0; j < 3; j++){ /* This loop will run 3 times for each iteration of the outer loop */
    console.log(`i: ${i}, j: ${j}`) /* this will print all combinations of i and j */
  }
}
// In total this will print 9 combinations of i and j (0,0), (0,1), (0,2), (1,0), (1,1), (1,2), (2,0), (2,1), (2,2)
