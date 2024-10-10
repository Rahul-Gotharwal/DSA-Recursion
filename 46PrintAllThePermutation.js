//-------------Code for the String for permutaion-----------------//
// Method 1: Using Recursion and Swap
function permuteSwap(arr) {
    let result = [];
    function permuteHelper(arr, start) {
        if (start === arr.length - 1) {
            result.push(arr.join(''));
        } else {
            for (let i = start; i < arr.length; i++) {
                // Swap characters
                [arr[start], arr[i]] = [arr[i], arr[start]];
                // Recursively generate permutations
                permuteHelper(arr, start + 1);
                // Swap back to restore the original order
                [arr[start], arr[i]] = [arr[i], arr[start]];
            }
        }
    }
    permuteHelper(arr.split(''), 0);
    return result;
}

// Example usage with a string
let str1 = "123";
let permutations1 = permuteSwap(str1);
console.log(permutations1);

//--------------Using Recursion and Concatenation---------------//
//-----------Answer acceptable by the leetcode-----------------//

// function permuteConcat(arr) {
//     let result = [];


//     function permuteHelper(current, remaining) {
//         if (remaining.length === 0) {
//             result.push(current.slice()); // Push a copy of current array
//         } else {
//             for (let i = 0; i < remaining.length; i++) {
//                 permuteHelper(
//                     current.concat(remaining[i]),
//                     remaining.slice(0, i).concat(remaining.slice(i + 1))
//                 );
//             }
//         }
//     }

//     permuteHelper([], arr);
//     return result.map(subArray => subArray.map(Number)); // Convert result to list<list<integer>>
// }

// // Example usage with a string
// let str1 = "123";
// let permutations1 = permuteConcat(str1.split(''));
// console.log(permutations1);

// // Example usage with an array
// let arr1 = [4, 5, 6];
// let permutations2 = permuteConcat(arr1);
// console.log(permutations2);

//---------------------------Striver's exact solution from web first Apparoch----------------//
// function permute(nums) {
//     let ans = [];
//     let ds = [];
//     let freq = new Array(nums.length).fill(0);
  
//     function recurPermute(ds, nums, ans, freq) {
//       if (ds.length === nums.length) {
//         ans.push([...ds]); // Push a copy of ds to ans
//         return;
//       }
//       for (let i = 0; i < nums.length; i++) {
//         if (!freq[i]) {
//           ds.push(nums[i]);
//           freq[i] = 1;
//           recurPermute(ds, nums, ans, freq);
//           freq[i] = 0;
//           ds.pop();
//         }
//       }
//     }
  
//     recurPermute(ds, nums, ans, freq);
//     return ans;
//   }
  
//   // Example usage
//   let nums = [1, 2, 3];
//   let permutations = permute(nums);
  
//   console.log("All Permutations are:");
//   permutations.forEach(permutation => {
//     console.log(permutation.join(' '));
//   });
  
  /**
   * Sure, let's dry run the given code with a focus on the `if` condition (`if (!freq[i])`). The goal is to see how this condition helps generate permutations by ensuring that each number is used only once per permutation.

### Initial Call

1. `permute([1, 2, 3])` is called.
2. `ans = []`, `ds = []`, `freq = [0, 0, 0]` are initialized.
3. `recurPermute([], [1, 2, 3], [], [0, 0, 0])` is called.

### First Level of Recursion (ds = [], freq = [0, 0, 0])

1. `ds.length = 0`, `nums.length = 3`, so the `if` condition `ds.length === nums.length` is false.
2. Loop starts with `i = 0`:
   - `freq[0] = 0` (not used), so the `if` condition `!freq[0]` is true.
   - `ds.push(1)`, `freq[0] = 1`.
   - Call `recurPermute([1], [1, 2, 3], [], [1, 0, 0])`.

### Second Level of Recursion (ds = [1], freq = [1, 0, 0])

1. `ds.length = 1`, `nums.length = 3`, so the `if` condition `ds.length === nums.length` is false.
2. Loop starts with `i = 0`:
   - `freq[0] = 1` (already used), so the `if` condition `!freq[0]` is false.
   - Skip to the next iteration.
3. Loop continues with `i = 1`:
   - `freq[1] = 0` (not used), so the `if` condition `!freq[1]` is true.
   - `ds.push(2)`, `freq[1] = 1`.
   - Call `recurPermute([1, 2], [1, 2, 3], [], [1, 1, 0])`.

### Third Level of Recursion (ds = [1, 2], freq = [1, 1, 0])

1. `ds.length = 2`, `nums.length = 3`, so the `if` condition `ds.length === nums.length` is false.
2. Loop starts with `i = 0`:
   - `freq[0] = 1` (already used), so the `if` condition `!freq[0]` is false.
   - Skip to the next iteration.
3. Loop continues with `i = 1`:
   - `freq[1] = 1` (already used), so the `if` condition `!freq[1]` is false.
   - Skip to the next iteration.
4. Loop continues with `i = 2`:
   - `freq[2] = 0` (not used), so the `if` condition `!freq[2]` is true.
   - `ds.push(3)`, `freq[2] = 1`.
   - Call `recurPermute([1, 2, 3], [1, 2, 3], [], [1, 1, 1])`.

### Fourth Level of Recursion (ds = [1, 2, 3], freq = [1, 1, 1])

1. `ds.length = 3`, `nums.length = 3`, so the `if` condition `ds.length === nums.length` is true.
2. Push `[1, 2, 3]` to `ans`.
3. Return to the previous level of recursion (ds = [1, 2], freq = [1, 1, 0]).
4. Backtrack: `ds.pop()`, `freq[2] = 0`.

### Back to Third Level (ds = [1, 2], freq = [1, 1, 0])

1. Loop ends, return to the previous level of recursion (ds = [1], freq = [1, 0, 0]).
2. Backtrack: `ds.pop()`, `freq[1] = 0`.

### Back to Second Level (ds = [1], freq = [1, 0, 0])

1. Loop continues with `i = 2`:
   - `freq[2] = 0` (not used), so the `if` condition `!freq[2]` is true.
   - `ds.push(3)`, `freq[2] = 1`.
   - Call `recurPermute([1, 3], [1, 2, 3], [[1, 2, 3]], [1, 0, 1])`.

### Third Level of Recursion (ds = [1, 3], freq = [1, 0, 1])

1. `ds.length = 2`, `nums.length = 3`, so the `if` condition `ds.length === nums.length` is false.
2. Loop starts with `i = 0`:
   - `freq[0] = 1` (already used), so the `if` condition `!freq[0]` is false.
   - Skip to the next iteration.
3. Loop continues with `i = 1`:
   - `freq[1] = 0` (not used), so the `if` condition `!freq[1]` is true.
   - `ds.push(2)`, `freq[1] = 1`.
   - Call `recurPermute([1, 3, 2], [1, 2, 3], [[1, 2, 3]], [1, 1, 1])`.

### Fourth Level of Recursion (ds = [1, 3, 2], freq = [1, 1, 1])

1. `ds.length = 3`, `nums.length = 3`, so the `if` condition `ds.length === nums.length` is true.
2. Push `[1, 3, 2]` to `ans`.
3. Return to the previous level of recursion (ds = [1, 3], freq = [1, 0, 1]).
4. Backtrack: `ds.pop()`, `freq[1] = 0`.

### Back to Third Level (ds = [1, 3], freq = [1, 0, 1])

1. Loop ends, return to the previous level of recursion (ds = [1], freq = [1, 0, 0]).
2. Backtrack: `ds.pop()`, `freq[2] = 0`.

### Back to First Level (ds = [], freq = [0, 0, 0])

1. Loop continues with `i = 1`:
   - `freq[1] = 0` (not used), so the `if` condition `!freq[1]` is true.
   - `ds.push(2)`, `freq[1] = 1`.
   - Call `recurPermute([2], [1, 2, 3], [[1, 2, 3], [1, 3, 2]], [0, 1, 0])`.

The process continues in a similar manner, generating the remaining permutations `[2, 1, 3]`, `[2, 3, 1]`, `[3, 1, 2]`, and `[3, 2, 1]`.

### Summary of Permutations

By the end of all recursive calls, the `ans` array contains all permutations of `[1, 2, 3]`:

```
[
  [1, 2, 3],
  [1, 3, 2],
  [2, 1, 3],
  [2, 3, 1],
  [3, 1, 2],
  [3, 2, 1]
]
```

The `if` condition `if (!freq[i])` ensures that each element is only used once per permutation, preventing duplicates and correctly generating all unique permutations.
   */

//------------apparoch 2 recursion or swap---------------//
// function permute(nums) {
//     let ans = [];
  
//     function recurPermute(index, nums) {
//       if (index === nums.length - 1) {
//         ans.push([...nums]); // Push a copy of nums to ans
//         return;
//       }
//       for (let i = index; i < nums.length; i++) {
//         [nums[index], nums[i]] = [nums[i], nums[index]]; // Swap elements
//         recurPermute(index + 1, nums);
//         [nums[index], nums[i]] = [nums[i], nums[index]]; // Backtrack swap
//       }
//     }
  
//     recurPermute(0, nums);
//     return ans;
//   }
  
//   // Example usage
//   let nums = [1, 2, 3];
//   let permutations = permute(nums);
  
//   console.log("All Permutations are:");
//   permutations.forEach(permutation => {
//     console.log(permutation.join(' '));
//   });
  