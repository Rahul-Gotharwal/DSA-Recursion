//-------------printing subsecquence whose sum is k
// function printAllSubsequences(arr , k ){
//     //let flag= false
//     function helper(index , ds , sum){
//         if(index === arr.length){
//             if(sum===k){ // && flag === false
//                 //flag = true
//                 console.log(ds)

//             }
//             return // In the printAllSubsequences function, the return statements in the helper function serve to stop further execution of the function once certain conditions are met.

//         }
//         ds.push(arr[index]);
//         helper(index+1 , ds , sum+arr[index]);
//         //backtrack
//         ds.pop();
//         helper(index+1 , ds , sum)
//     }
//     helper(0,[] ,0)
// }
// let arr = [1, 2, 1];
// let k = 2;
// printAllSubsequences(arr, k);

/**
 *                                     []
                                /       \
                           [1]            []
                         /    \         /    \
                  [1, 2]     [1]    [2]     []
                /    \      /  \     / \    / \
           [1,2,1] [1,2] [1,1] [1] [2,1] [2] [1] []

 */

//-------------Print only one subsecquence----------------//
///watch video if not understand or check the copy
// function printOneSubsequence(arr, k) {
//   function helper(index, ds, sum) {
//     if (sum === k) {
//       console.log(ds);
//       return true;
//     }
//     if (index === arr.length) {
//       return false;
//     }
//     ds.push(arr[index]);
//     // the condtion will get satisfy in this if by returning true so further exection are stop of recursion , because we using if that is used for the checking condtions
//     if (helper(index + 1, ds, sum + arr[index]) === true) { 
//         return true; // we return true to the main function by going to prevois to previos calls then main  helper(0, [], 0);
//     }
//     // Backtrack
//     ds.pop();
//     if (helper(index + 1, ds, sum) === true) {
//       return true;
//     }
//     return false;
//   }
//   helper(0, [], 0);
// }
// let arr = [1, 2, 1];
// let k = 2;
// printOneSubsequence(arr, k);

/**
 * The further recursion calls are stopped because of the following conditions:

1. **Base Case (Sum Condition):** When `sum === k` in the `helper` function, a valid subset (`ds`) is printed, and `true` is returned.
   
2. **Propagation of True:** Upon encountering `sum === k`, `true` is returned up the call stack to the previous recursive call.

3. **Recursive Return Check:** Each recursive call checks if the subsequent call returns `true`.
   
4. **Termination:** Once a recursive call returns `true`, indicating a valid subset was found, the propagation of `true` stops further recursive exploration, ensuring only the first valid subset is printed.
 */

//---------------------count the subsecquence with sum == k -----------------//
// according to the example there are 2 subsecquence that gives the sum = k 
function countSubsequences(arr, k) {
    function helper(index, sum) {
        if (index === arr.length) {
            return sum === k ? 1 : 0;
        }
        
        // Pick the current element
        let left = helper(index + 1, sum + arr[index]);
        
        // Do not pick the current element
        let right = helper(index + 1, sum);
        
        return left + right;
    }
    
    return helper(0, 0);
}
let arr = [1, 2, 1];
let k = 2;
console.log(countSubsequences(arr, k));

/**
 *                       helper(0, 0)
                    /             \
           helper(1, 1)           helper(1, 0)
          /          \           /           \
 helper(2, 3)  helper(2, 1)   helper(2, 2)   helper(2, 0)
     1             0             1             0

 */