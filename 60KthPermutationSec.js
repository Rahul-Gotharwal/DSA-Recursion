// function getPermutation(n, k) {
//     // Generate a factorial lookup array
//     const factorial = [1];
//     for (let i = 1; i < n; i++) {
//         factorial[i] = factorial[i - 1] * i;
//     }

//     // Generate the numbers array
//     const numbers = [];
//     for (let i = 1; i <= n; i++) {
//         numbers.push(i);
//     }

//     // Adjust k to be zero-indexed
//     k--;

//     let result = '';
//     for (let i = n; i > 0; i--) {
//         // Determine which number should be at the current position
//         const index = Math.floor(k / factorial[i - 1]);
//         result += numbers[index];

//         // Remove used number from the list
//         numbers.splice(index, 1);

//         // Update k to the remainder
//         k %= factorial[i - 1];
//     }

//     return result;
// }

// // Example usage:
// console.log(getPermutation(3, 3)); // Output: "213"
// console.log(getPermutation(4, 9)); // Output: "2314"


//------------STRIER'S SOLUTION-BRUTE FORCE SOLUTION------------------//
function permutationHelper(s, index, res) {
    if (index === s.length) {
        res.push(s.join(''));
        return;
    }
    for (let i = index; i < s.length; i++) {
        [s[i], s[index]] = [s[index], s[i]];  // Swap
        permutationHelper(s, index + 1, res);
        [s[i], s[index]] = [s[index], s[i]];  // Swap back
    }
}

function getPermutation(n, k) {
    let s = [];
    let res = [];
    
    // Create string
    for (let i = 1; i <= n; i++) {
        s.push(String(i));
    }
    
    permutationHelper(s, 0, res);
    
    // Sort the generated permutations
    res.sort();
    
    // Make k 0-based indexed to point to the kth sequence
    return res[k - 1];
}

// Example usage:
let n = 3, k = 5;
let ans = getPermutation(n, k);
console.log("The Kth permutation sequence is " + ans);

/**
 * Sure! Let's do a detailed dry run for the given JavaScript code with `n = 3` and `k = 5`.

### Initial Setup:
- `n = 3`
- `k = 5`
- `s = []` (to hold numbers from 1 to n as strings)
- `res = []` (to store all permutations)

### Step-by-Step Execution:

1. **Initialize `s`:**
   - Loop from `1` to `n` (i.e., `1` to `3`):
     - For `i = 1`: `s.push(String(1))` → `s = ['1']`
     - For `i = 2`: `s.push(String(2))` → `s = ['1', '2']`
     - For `i = 3`: `s.push(String(3))` → `s = ['1', '2', '3']`
   - Initial values: `s = ['1', '2', '3']`

2. **Generate Permutations (Calling `permutationHelper`):**

### Permutation Generation with Recursive Function:
Let's trace the recursive calls of `permutationHelper(s, index, res)` to generate all permutations of `s`.

#### First Level:
- `permutationHelper(['1', '2', '3'], 0, [])`
  - Swap `s[0]` with `s[0]` → `s = ['1', '2', '3']`
  - Call `permutationHelper(['1', '2', '3'], 1, [])`
  - Swap `s[0]` with `s[1]` → `s = ['2', '1', '3']`
  - Call `permutationHelper(['2', '1', '3'], 1, [])`
  - Swap `s[0]` with `s[2]` → `s = ['3', '2', '1']`
  - Call `permutationHelper(['3', '2', '1'], 1, [])`

#### Second Level:
- `permutationHelper(['1', '2', '3'], 1, [])`
  - Swap `s[1]` with `s[1]` → `s = ['1', '2', '3']`
  - Call `permutationHelper(['1', '2', '3'], 2, [])`
  - Swap `s[1]` with `s[2]` → `s = ['1', '3', '2']`
  - Call `permutationHelper(['1', '3', '2'], 2, [])`

- `permutationHelper(['2', '1', '3'], 1, [])`
  - Swap `s[1]` with `s[1]` → `s = ['2', '1', '3']`
  - Call `permutationHelper(['2', '1', '3'], 2, [])`
  - Swap `s[1]` with `s[2]` → `s = ['2', '3', '1']`
  - Call `permutationHelper(['2', '3', '1'], 2, [])`

- `permutationHelper(['3', '2', '1'], 1, [])`
  - Swap `s[1]` with `s[1]` → `s = ['3', '2', '1']`
  - Call `permutationHelper(['3', '2', '1'], 2, [])`
  - Swap `s[1]` with `s[2]` → `s = ['3', '1', '2']`
  - Call `permutationHelper(['3', '1', '2'], 2, [])`

#### Third Level:
- `permutationHelper(['1', '2', '3'], 2, [])`
  - Swap `s[2]` with `s[2]` → `s = ['1', '2', '3']`
  - Call `permutationHelper(['1', '2', '3'], 3, [])`
  - Add `s.join('')` to `res` → `res = ['123']`

- `permutationHelper(['1', '3', '2'], 2, [])`
  - Swap `s[2]` with `s[2]` → `s = ['1', '3', '2']`
  - Call `permutationHelper(['1', '3', '2'], 3, [])`
  - Add `s.join('')` to `res` → `res = ['123', '132']`

- `permutationHelper(['2', '1', '3'], 2, [])`
  - Swap `s[2]` with `s[2]` → `s = ['2', '1', '3']`
  - Call `permutationHelper(['2', '1', '3'], 3, [])`
  - Add `s.join('')` to `res` → `res = ['123', '132', '213']`

- `permutationHelper(['2', '3', '1'], 2, [])`
  - Swap `s[2]` with `s[2]` → `s = ['2', '3', '1']`
  - Call `permutationHelper(['2', '3', '1'], 3, [])`
  - Add `s.join('')` to `res` → `res = ['123', '132', '213', '231']`

- `permutationHelper(['3', '2', '1'], 2, [])`
  - Swap `s[2]` with `s[2]` → `s = ['3', '2', '1']`
  - Call `permutationHelper(['3', '2', '1'], 3, [])`
  - Add `s.join('')` to `res` → `res = ['123', '132', '213', '231', '321']`

- `permutationHelper(['3', '1', '2'], 2, [])`
  - Swap `s[2]` with `s[2]` → `s = ['3', '1', '2']`
  - Call `permutationHelper(['3', '1', '2'], 3, [])`
  - Add `s.join('')` to `res` → `res = ['123', '132', '213', '231', '312', '321']`

### Sorting Permutations:
- `res.sort()` → `res = ['123', '132', '213', '231', '312', '321']`

### Adjust k to be Zero-Indexed:
- `k = 5 - 1` → `k = 4`

### Return the k-th Permutation:
- `res[k]` → `res[4]` → `'312'`

### Final Output:
- The k-th (5th) permutation sequence for `n = 3` is `'312'`.

### Dry Run Summary:
- Initial Setup: `s = ['1', '2', '3']`, `res = []`
- Generated Permutations: `['123', '132', '213', '231', '312', '321']`
- Sorted Permutations: `['123', '132', '213', '231', '312', '321']`
- Final Output: `res[4]` → `'312'`
 */
//-------------------------Striver's solution Optimal Appraoch-----------------//
// class Solution {
//     getPermutation(n, k) {
//         let fact = 1;
//         let numbers = [];
        
//         for (let i = 1; i < n; i++) {
//             fact *= i;
//             numbers.push(i);
//         }
//         numbers.push(n);// this will push the 3 
        
//         let ans = "";
//         k -= 1;
        
//         while (true) {
//             ans += numbers[Math.floor(k / fact)].toString();
//             numbers.splice(Math.floor(k / fact), 1);
             
//             if (numbers.length === 0) {
//                 break;
//             }
            
//             k %= fact;
//             fact = Math.floor(fact / numbers.length);
//         }
         
//         return ans;
//     }
// }

// // Test the function
// let n = 3, k = 3;
// let obj = new Solution();
// let ans = obj.getPermutation(n, k);
// console.log("The Kth permutation sequence is " + ans);

/**
 * Sure! Let's do a detailed dry run for the given JavaScript code with `n = 3` and `k = 3`.

### Initial Setup:
- `n = 3`
- `k = 3`
- `fact = 1` (factorial of (n-1) which is 2!)
- `numbers = []` (to hold numbers from 1 to n)
- `ans = ""` (to build the k-th permutation sequence)

### Step-by-Step Execution:

1. **Factorial Calculation and Numbers Initialization:**
   - Loop from `1` to `n-1` (i.e., `1` to `2`):
     - For `i = 1`: 
       - `fact *= 1` → `fact = 1`
       - `numbers.push(1)` → `numbers = [1]`
     - For `i = 2`: 
       - `fact *= 2` → `fact = 2`
       - `numbers.push(2)` → `numbers = [1, 2]`
   - After the loop, `numbers.push(n)` → `numbers = [1, 2, 3]`
   - Initial values: 
     - `fact = 2` (2!)
     - `numbers = [1, 2, 3]`
     - `k = 3 - 1` → `k = 2` (adjusted to zero-indexed)

2. **First Iteration of the While Loop:**
   - `Math.floor(k / fact)` → `Math.floor(2 / 2)` → `1`
   - `ans += numbers[1].toString()` → `ans += '2'` → `ans = "2"`
   - `numbers.splice(1, 1)` → `numbers = [1, 3]` (removes the number at index 1)
   - `numbers.length = 2` (not zero, so continue)
   - `k %= fact` → `k = 2 % 2` → `k = 0`
   - `fact = Math.floor(fact / numbers.length)` → `fact = Math.floor(2 / 2)` → `fact = 1`

3. **Second Iteration of the While Loop:**
   - `Math.floor(k / fact)` → `Math.floor(0 / 1)` → `0`
   - `ans += numbers[0].toString()` → `ans += '1'` → `ans = "21"`
   - `numbers.splice(0, 1)` → `numbers = [3]` (removes the number at index 0)
   - `numbers.length = 1` (not zero, so continue)
   - `k %= fact` → `k = 0 % 1` → `k = 0`
   - `fact = Math.floor(fact / numbers.length)` → `fact = Math.floor(1 / 1)` → `fact = 1`

4. **Third Iteration of the While Loop:**
   - `Math.floor(k / fact)` → `Math.floor(0 / 1)` → `0`
   - `ans += numbers[0].toString()` → `ans += '3'` → `ans = "213"`
   - `numbers.splice(0, 1)` → `numbers = []` (removes the number at index 0)
   - `numbers.length = 0` (zero, so exit loop)

5. **Return the Result:**
   - `return ans` → `return "213"`

### Final Output:
- The k-th (3rd) permutation sequence for `n = 3` is `"213"`.

### Dry Run Summary:
- Initial Setup: `fact = 2`, `numbers = [1, 2, 3]`, `k = 2`
- First Iteration: `ans = "2"`, `numbers = [1, 3]`, `k = 0`, `fact = 1`
- Second Iteration: `ans = "21"`, `numbers = [3]`, `k = 0`, `fact = 1`
- Third Iteration: `ans = "213"`, `numbers = []`
- Final Output: `"213"`
 */