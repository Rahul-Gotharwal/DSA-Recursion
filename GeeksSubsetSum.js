//-------------Geeks for geeks -> https://www.geeksforgeeks.org/problems/subset-sums2234/1
// function subsetSums(arr, n) {
//     let result = [];

//     function findSubsetSums(index, currentSum) {
//         if (index === n) {
//             result.push(currentSum);
//             return;
//         }

//         // Include the current element in the sum
//         findSubsetSums(index + 1, currentSum + arr[index]);
//         // Exclude the current element from the sum
//         findSubsetSums(index + 1, currentSum);
//     }

//     findSubsetSums(0, 0);
//     result.sort((a, b) => a - b);
//     return result;
// }

// // Example usage:
// let arr = [3, 1, 2];
// let n = arr.length;
// console.log(subsetSums(arr, n));


//----------------subset sum with according to the given sum -------------------//
function isSubsetSum(arr, n, sum) {
    // Base Cases
    if (sum === 0) return true;
    if (n === 0 && sum !== 0) return false;

    // If the last element is greater than the sum, ignore it
    if (arr[n - 1] > sum) return isSubsetSum(arr, n - 1, sum);

    /* 
     * Check if sum can be obtained by any of the following:
     * (a) including the last element
     * (b) excluding the last element
     */
    return isSubsetSum(arr, n - 1, sum) || 
           isSubsetSum(arr, n - 1, sum - arr[n - 1]);
}

// Example usage:
let arr = [3, 34, 4, 12, 5, 2];
let sum = 9;
let n = arr.length;

if (isSubsetSum(arr, n, sum)) {
    console.log(1);  // Output: 1
} else {
    console.log(0);  // Output: 0
}
