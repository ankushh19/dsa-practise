// Question 1 : 
// Expected Output : 
// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 

// let n = 5
// for(let i = 0; i < n; i++){ /* i is responsible for the number of rows */
//   let row = "";
//   for(let j = 0; j < n; j++){ /* j is responsible for the number of columns */
//     row = row + "* "
//   }
//   console.log(row);
// }

// Question 2 : 
// Expected Output : 
// * 
// * * 
// * * * 
// * * * * 

// let n = 4
// for (let i = 0; i < n; i++) { /* i is responsible for the number of rows */
//   let row = ""
//   for (let j = 0; j <= i; j++) { /* this loop will run i+1 times for each iteration of the outer loop */
//     row = row + "* "
//   }
//   console.log(row)
// }

// Question 3 : 
// Expected Output : 
// 1
// 12
// 123
// 1234
// 12345

// let n = 5
// for(let i =0; i < n; i++){
//     let row = "";
//     for(let j = 0; j <= i; j++){
//         row = row + (j + 1) /* prints numbers in each row */
//     }
//     console.log(row)
// }

// Question 4 : 
// Expected Output : 
// 1
// 22
// 333
// 4444
// 55555

// let n = 5
// for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j <= i; j++) {
//         row = row + (i + 1) /* prints the same number in each row */
//     }
//     console.log(row)
// }

// Question 5 :
// Expected Output :
//12345
//1234
//123
//12
//1

// let n = 5
// for(let i = 0; i < n; i++){
//     let row = "";
//     for(let j = 0; j < n - i; j++){
//         row = row + (j + 1);
//     }
//     console.log(row);
// }

// Question 6: 
// Expected Output :
// * * * * * 
// * * * * 
// * * * 
// * * 
// * 

// let n = 5

// for(let i = 0; i < n; i++){
//     let row = "";
//     for(let j = 0; j < n - i; j++){
//         row += "* "
//     }
//     console.log(row)
// }

// Question 7: 
// Expected Output :
//     *
//    **
//   ***
//  ****
// *****

// let n = 5
// for(let i = 0; i < n; i++){
//     let row = "";

//     for(let j = 0; j < n-(i + 1); j++){ /*  this loop is for adding blank space */
//         row +=  " " 
//     }
//      for(let k = 0; k < i + 1; k++){ /*  this loop is for adding stars */
//         row = row + "*" 
//     }
//     console.log(row)
// }

// Question 8 :
// Expected Output :
// 1
// 10
// 101
// 1010
// 10101

// let n = 5

// for(let i = 0; i < n; i++){
//     let row = "";
//     let toggle = 1
//     for(let j = 0; j <= i; j++){
//         row = row + toggle
//         if(toggle === 1){
//             toggle = 0
//         } else {
//             toggle = 1
//         }
//     }
//     console.log(row)
// }


// Question 9 : 
// Expected Output : 
// 1
// 01
// 010
// 1010
// 10101

let n = 5
let toggle = 1
for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j <= i; j++) {
        row = row + toggle
        if (toggle === 1) {
            toggle = 0
        } else {
            toggle = 1
        }
    }
    console.log(row)
}