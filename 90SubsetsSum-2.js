/**
Generate all subsets using the pick and non-pick technique.
Store subsets in a set to remove duplicates.
Convert the set back to a list of lists.} nums 
 */
// function subsetsWithDup(nums) {
//   nums.sort((a, b) => a - b);
//   const result = [];
//   const subset = [];
//   function generateSubsets(index){
//     if(index === nums.length){
//         result.push([...subset]);
//         return
//     }
//     // include nums index
//     subset.push(nums[index]);
//     generateSubsets(index+1)
//     // exclude nums index
//     subset.pop();
//     generateSubsets(index+1)
//   }
//   generateSubsets(0)
//     // Remove duplicates using a set
//     const uniqueSubsets = new Set(result.map(JSON.stringify));
//     return Array.from(uniqueSubsets).map(JSON.parse)
// }
// const nums = [1, 2, 2];
// console.log(subsetsWithDup(nums));


/**
 * Optimized Recursive Approach
Sort the array to handle duplicates easily.
Use a recursive function to build subsets, skipping duplicate elements.
 */
function subsetsWithDup(nums){
nums.sort((a,b)=>a-b);
const result = [];
function backtrack(start , subset){
    result.push([...subset])
    for(let i = start ; i<nums.length ; i++){
        //skip the duplicate
        if(i>start  && nums[i] === nums[i-1]) continue;
        subset.push(nums[i]);
        backtrack(i+1 , subset);
        subset.pop()
    }
}
backtrack(0, []);
    return result;
}
const nums = [1, 2, 2];
console.log(subsetsWithDup(nums));

/***
 * Let's dry run the `subsetsWithDup` function to understand how the `for` loop and `pop` operation work together during the backtracking process. We will use the example `nums = [1, 2, 2]` to see how subsets are generated.
### Dry Run

#### Initial State
- `nums = [1, 2, 2]`
- `result = []`
- `start = 0`
- `subset = []`

#### Iteration 1 (Initial call)
1. `backtrack(0, [])`:
    - Add `[]` to `result`: `result = [[]]`
    - Loop starts with `i = 0`
        - `subset.push(nums[0])` -> `subset = [1]`
        - Recurse: `backtrack(1, [1])`

#### Iteration 2
2. `backtrack(1, [1])`:
    - Add `[1]` to `result`: `result = [[], [1]]`
    - Loop starts with `i = 1`
        - `subset.push(nums[1])` -> `subset = [1, 2]`
        - Recurse: `backtrack(2, [1, 2])`

#### Iteration 3
3. `backtrack(2, [1, 2])`:
    - Add `[1, 2]` to `result`: `result = [[], [1], [1, 2]]`
    - Loop starts with `i = 2`
        - `subset.push(nums[2])` -> `subset = [1, 2, 2]`
        - Recurse: `backtrack(3, [1, 2, 2])`

#### Iteration 4
4. `backtrack(3, [1, 2, 2])`:
    - Add `[1, 2, 2]` to `result`: `result = [[], [1], [1, 2], [1, 2, 2]]`
    - `start = 3`, which is equal to `nums.length`, so return.

#### Backtrack from Iteration 4 to Iteration 3
5. Return to `backtrack(2, [1, 2])`
    - `subset.pop()` -> `subset = [1, 2]`
    - Continue loop with `i = 2`
        - `i = 2`, but skip as `nums[2] === nums[1]` and `i > start`.
    - Loop ends, return.

#### Backtrack from Iteration 3 to Iteration 2
6. Return to `backtrack(1, [1])`
    - `subset.pop()` -> `subset = [1]`
    - Continue loop with `i = 1`
        - `subset.push(nums[1])` -> `subset = [1, 2]`
        - Recurse: `backtrack(2, [1, 2])` (This part is similar to steps 3 to 5, but here `subset` starts as `[1, 2]`).

#### Iteration 5 (Continued from Iteration 2 with `i = 2`)
7. Continue with `i = 2`
    - `subset.push(nums[2])` -> `subset = [1, 2, 2]`
    - Recurse: `backtrack(3, [1, 2, 2])` (This part is similar to steps 3 to 4).

#### Backtrack from Iteration 5 to Iteration 2
8. Return to `backtrack(1, [1, 2])`
    - `subset.pop()` -> `subset = [1]`
    - Continue loop with `i = 2`
        - `i = 2`, but skip as `nums[2] === nums[1]` and `i > start`.
    - Loop ends, return.

#### Backtrack from Iteration 2 to Iteration 1
9. Return to `backtrack(0, [])`
    - `subset.pop()` -> `subset = []`
    - Continue loop with `i = 1`
        - `subset.push(nums[1])` -> `subset = [2]`
        - Recurse: `backtrack(2, [2])`

#### Iteration 6
10. `backtrack(2, [2])`:
    - Add `[2]` to `result`: `result = [[], [1], [1, 2], [1, 2, 2], [2]]`
    - Loop starts with `i = 2`
        - `subset.push(nums[2])` -> `subset = [2, 2]`
        - Recurse: `backtrack(3, [2, 2])`

#### Iteration 7
11. `backtrack(3, [2, 2])`:
    - Add `[2, 2]` to `result`: `result = [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]]`
    - `start = 3`, which is equal to `nums.length`, so return.

#### Backtrack from Iteration 7 to Iteration 6
12. Return to `backtrack(2, [2])`
    - `subset.pop()` -> `subset = [2]`
    - Continue loop with `i = 2`
        - `i = 2`, but skip as `nums[2] === nums[1]` and `i > start`.
    - Loop ends, return.

#### Backtrack from Iteration 6 to Iteration 1
13. Return to `backtrack(0, [])`
    - `subset.pop()` -> `subset = []`
    - Continue loop with `i = 2`
        - `i = 2`, but skip as `nums[2] === nums[1]` and `i > start`.
    - Loop ends, return.

### Final Result

The `result` array will contain all unique subsets: `[[], [1], [1, 2], [1, 2, 2], [2], [2, 2]]`.

### Summary

1. **Push** adds an element to `subset`.
2. **Recursive Call** generates subsets including this element.
3. **Pop** removes the last element, restoring `subset` for the next iteration of the loop.
4. The `for` loop continues with the next index, and the process repeats.

By placing `pop` immediately after the recursive call, you ensure that `subset` is correctly reset before moving to the next iteration of the loop, allowing the generation of all possible unique subsets.
 */

