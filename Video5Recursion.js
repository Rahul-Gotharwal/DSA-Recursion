//----------------------Fibonacci series (Functional recursion)--------------//
// function Fibonacci(n){
// if(n ==0){
//     return 0 
// }
// if(n==1){
//     return 1
// }
// return Fibonacci(n-1)+Fibonacci(n-2);
// }
// let n = 3;
// console.log(Fibonacci(3))

//-----------------permetrized recursion-------------------//
// function Fibonacci(n ,a=0 , b =1){
//     if(n==0){
//         return a 
//     }
//     if(n==1){
//         return b
//     } // according to the peramentr of  Fibonacci(n-1 , b ,a+b) the b is taking place of a so at the tme of calling the Fibonacci(2, 1, 1) the a becmoes 1
//     return Fibonacci(n-1 , b ,a+b) 

// } 
// let n = 6;
// console.log(Fibonacci(n)); // Output: 2
/**
 * Detailed Step-by-Step Execution:
Initial Call: Fibonacci(3, 0, 1)

n is 3, so it doesn't satisfy n == 0 or n == 1.
The function calls Fibonacci(2, 1, 1).
Second Call: Fibonacci(2, 1, 1)

n is 2, so it doesn't satisfy n == 0 or n == 1.
The function calls Fibonacci(1, 1, 2).
Third Call: Fibonacci(1, 1, 2)

n is 1, so it satisfies the condition n == 1.
The function returns b, which is 2.
Summary of Recursive Steps:
In the initial call Fibonacci(3, 0, 1), the parameters a and b are 0 and 1, respectively.
The next call Fibonacci(2, 1, 1) updates a to 1 and b to 1 (from a + b of the previous step).
The next call Fibonacci(1, 1, 2) updates a to 1 and b to 2 (from a + b of the previous step).
 */

//--------------fibonacci using for loop--------------------//
// function fibonacci(n){
//     if(n==0){
//         return 0 ;
//     } 
//     if(n==1){
//         return 1
//     }
//     let a = 0 , b =1 ,sum 
//     for(let i = 2 ; i<=n ; i++){
//       sum = a+b 
//       a=b;
//       b =sum
//     }
//     return b 

// }
// console.log(fibonacci(5));
