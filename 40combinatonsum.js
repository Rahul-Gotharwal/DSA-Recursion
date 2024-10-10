// // -------------------using the for loop-----------------//
// function combinationSum2(candidates, target) {
//   let results = [];
//   // Sort candidates to handle duplicates properly
//   candidates.sort((a, b) => a - b);
//   function backtrack(start, target, current) {
//     if (target === 0) {
//       results.push([...current]);
//       return;
//     }
//     for (let i = start; i < candidates.length; i++) {
//       // Skip duplicates
//       // first 1 to chahiye hi kese bhi kyuki vo duplicate me consider nhi hoga , uske aage se duplicate hw kyuki dupicate k liye 2 values hooni chahiye [1,1.......]
//       //why i > ind => kyuki agar ye nhi lgaya to hum humari phli value ko bhi skip kar denge kyuki array is [1,1,1,2,2] jab a[0] is 1 and a[1] is also 1 but we need the a[0] , and after it we dont want the duplicates
//       // phli bar me ye if ko check hi nhi krega i is 0 and start is also 0 so condition get false
//       if (i > start && candidates[i] === candidates[i - 1]) continue;
//       // Check if adding candidates[i] exceeds the target
//       if (candidates[i] > target) break;
//       current.push(candidates[i]);
//       // Recursive call with updated parameters
//       backtrack(i + 1, target - candidates[i], current);
//       // Backtrack
//       current.pop();
//     }
//   }
//   backtrack(0, target, []);
//   return results;
// }

// let candidates = [1,1,1,2,2];
// let target = 4;
// let result = combinationSum2(candidates, target);
// console.log(result);

//---------------------using the recursion only ---------------//

function combinationSum2(candidates, target) {
    let results = [];
    // Sort candidates to handle duplicates properly
    candidates.sort((a, b) => a - b);
    function backtrack(index, target, current) {
        if (target === 0) {
            results.push([...current]);
            return;
        }
        let i = index;
        // Handle duplicates
        while (i < candidates.length && candidates[i] <= target) {
            current.push(candidates[i]);
            // Recursive call with updated parameters
            backtrack(i + 1, target - candidates[i], current);
            // Backtrack
            current.pop();
            // Skip duplicates
            // yha pe hum i+1 se duplicate check kar rhe he to 1 is remaain same bcz it is at a[0]
            while (i + 1 < candidates.length && candidates[i] === candidates[i + 1]) {
                i++;
            }
            i++;
        }
    }

    backtrack(0, target, []);
    return results;
}

// Example usage:
let candidates = [1,1,1,2,2];
let target = 4;
let result = combinationSum2(candidates, target);
console.log(result);
