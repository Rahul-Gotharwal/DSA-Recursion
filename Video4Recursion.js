//Reverse an Array Using Recursion using two pointer
// ye ek functional recursin he kyuki isme function main function ko value return kar dega jab condition false jo jayegi
// no need to assign res like , res = reverseArray(arr1, 0 , arr1.length-1); 
// function reverseArray(arr , left , right){ 
// if(left>=right) {
//     return
// }
// [arr[left], arr[right]] = [arr[right], arr[left]];
// reverseArray(arr, left+1, right-1);
// }
// const arr1 = [1,2,3,4,5];
// reverseArray(arr1, 0 , arr1.length-1);
// console.log(arr1)

/**
 * Explanation:
The reverseArray function modifies arr1 in place by swapping elements and recursively calling itself.
There's no need to assign the result of reverseArray to res because the function doesn't return a value. Instead, it changes the arr1 array directly.
After calling reverseArray, you simply log arr1 to see the reversed array.
 */

//---------------- Using the peramterized recursion-----------------//
// function reverseArrayParameterized(arr,left , right  , result){
//     if(left>right) return result;
//     result.push(arr[right]);
//     return reverseArrayParameterized(arr,left,right-1 , result)
// }
// const array1 = [1, 2, 3, 9, 8];
// const reversedArray = reverseArrayParameterized(array1, 0, array1.length - 1, []);
// console.log(reversedArray); // Output: [5, 4, 3, 2, 1]


//------------------using the Single pointer----------------//
function reverseArraySinglePointer(arr ,index){
    const n = arr.length;
    if(index>=Math.floor(n/2)) return;
    [arr[index] ,arr[n-index-1]] = [arr[n-index-1] ,arr[index]]
    reverseArraySinglePointer(arr, index+1)
}
const array2 = [1, 2, 3, 4, 5];
reverseArraySinglePointer(array2, 0);
console.log(array2); // Output: [5, 4, 3, 2, 1]


//---------------Check if a String is a Palindrome Using Recursion-----------------//
function isPalindrome(str, left, right) {
    if (left >= right) return true;
    if (str[left] !== str[right]) return false;
    return isPalindrome(str, left + 1, right - 1);
}

const str1 = "madam";
const str2 = "hello";
console.log(isPalindrome(str1, 0, str1.length - 1)); // Output: true
console.log(isPalindrome(str2, 0, str2.length - 1)); // Output: false
