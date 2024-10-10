//---------------sum of first n numbers using recursion or the function returns the value---------------//
// var sum = function (i, n) {
//   if (i > 10) {
//     return 0; // we must return 0 from here otherwise the answer of sum is  NaN 
//   }
//    let currentSum =  i+sum(i + 1, n); // Recursive case: add i to the sum of the next number
//    console.log(`i: ${i}, currentSum: ${currentSum}`); // Log the current value of i and the current sum
//   return currentSum;
//   // yha pe hum current sum return kar rhe he jab i> 10 ho jaye with return 0 
//   //10+9+8+7+6+5+4+3+2+1 => 55
// };
// let result = sum(1, 10);
// console.log(result);
/**
 * sum(1, 10)
|
|-- 1 + sum(2, 10)
    |
    |-- 2 + sum(3, 10)
        |
        |-- 3 + sum(4, 10)
            |
            |-- 4 + sum(5, 10)
                |
                |-- 5 + sum(6, 10)
                    |
                    |-- 6 + sum(7, 10)
                        |
                        |-- 7 + sum(8, 10)
                            |
                            |-- 8 + sum(9, 10)
                                |
                                |-- 9 + sum(10, 10)
                                    |
                                    |-- 10 + sum(11, 10)
                                        |
                                        |-- 0 (base case)

 * 
 */
// Printing resull or toatal in the recursive function -------------------//

// function sum( i , n , total =0 ){
//     if(i>n){
//         // yha pe jab base case direcly total return kar dega condtion hi yhi he ki jab i>n ho jaye to return kar do
//         console.log(`total is ${total}`);
//         return total // we can return anything like i or n also give the 55
//     } // jab pura execution ho jaye tb total return kar diya
//     return sum(i+1 , n , total+i)
// }
// sum(1,10)

/***
 * sum(1, 10, 0)
|
|-- sum(2, 10, 1)
    |
    |-- sum(3, 10, 3)
        |
        |-- sum(4, 10, 6)
            |
            |-- sum(5, 10, 10)
                |
                |-- sum(6, 10, 15)
                    |
                    |-- sum(7, 10, 21)
                        |
                        |-- sum(8, 10, 28)
                            |
                            |-- sum(9, 10, 36)
                                |
                                |-- sum(10, 10, 45)
                                    |
                                    |-- sum(11, 10, 55)
                                        |
                                        |-- returns 55 (base case)

 */
 
//---------- sum using perameterized recursion strivers approach-------------//
// function sumCal(i ,sum){
//     if(i<1){
//      console.log(sum); // ye direct sum print kar dega jab condition false ho jayegi
//      return
//     }
//     sumCal(i-1 , sum+i);

// }
// sumCal(3,0)

//-----------------SUM USING THE FUNCTIONAL RECURSION---------------//
sumCal = (n)=>{
 if(n==0){
    return 0 
 } 
 return n+sumCal(n-1) // ye recursive call krega  or result return krega iske previos call ko
} // Recursive case: adds n to the result of sumCal(n - 1)
let n = 3;
let res = sumCal(n);
console.log(res)  

/**
 * Parameterized Recursion: Useful for problems where maintaining and updating state across recursive calls is necessary (e.g., generating combinations, tracking intermediate results).
  Functional Recursion: Ideal for straightforward problems where you just need to accumulate a result.
 */  
