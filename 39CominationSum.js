//  //using the for loop , not the striver's solution 
//  var combinationSum  = function(candidates , target){
//     let result = [];
//     function backtrack(start , target , currentCombination){
//         if(target === 0){
//             // the if condition is the base case
//             result.push([...currentCombination]);
//             return
//         }
//         for(let i = start ; i<candidates.length ; i++){
//             if(candidates[i]<=target){
//                 // ye backtrack k result ko store krega
//              currentCombination.push(candidates[i]);
//              backtrack(i ,target-candidates[i] , currentCombination);
//              currentCombination.pop()
//             }
//         }
//     }
//     backtrack(0, target, []);
//     return result;
//  }

// let candidates = [2, 3, 6, 7];
// let target = 7;
// console.log(combinationSum(candidates, target));
/**
 * Let's dry run the code with the `candidates = [2, 3, 6, 7]` and `target = 7`.

### Initial Call
```javascript
combinationSum(candidates, target)
```
- `start = 0`
- `target = 7`
- `currentCombination = []`

### First Call to `backtrack`
```javascript
backtrack(0, 7, [])
```

#### Iteration 1 (`i = 0`)
- `candidates[0] = 2`
- `target = 7 - 2 = 5`
- `currentCombination = [2]`

##### Second Call to `backtrack`
```javascript
backtrack(0, 5, [2])
```

##### Iteration 1 (`i = 0`)
- `candidates[0] = 2`
- `target = 5 - 2 = 3`
- `currentCombination = [2, 2]`

###### Third Call to `backtrack`
```javascript
backtrack(0, 3, [2, 2])
```

###### Iteration 1 (`i = 0`)
- `candidates[0] = 2`
- `target = 3 - 2 = 1`
- `currentCombination = [2, 2, 2]`

####### Fourth Call to `backtrack`
```javascript
backtrack(0, 1, [2, 2, 2])
```

####### Iteration 1 (`i = 0`)
- `candidates[0] = 2`
- `target = 1 - 2 = -1`
- **Skip this iteration** (since `candidates[0] > target`)

####### Iteration 2 (`i = 1`)
- `candidates[1] = 3`
- `target = 1 - 3 = -2`
- **Skip this iteration** (since `candidates[1] > target`)

####### Iteration 3 (`i = 2`)
- `candidates[2] = 6`
- `target = 1 - 6 = -5`
- **Skip this iteration** (since `candidates[2] > target`)

####### Iteration 4 (`i = 3`)
- `candidates[3] = 7`
- `target = 1 - 7 = -6`
- **Skip this iteration** (since `candidates[3] > target`)

- Backtrack (pop the last element)
- `currentCombination = [2, 2]`

###### Return to Third Call
```javascript
backtrack(0, 3, [2, 2])
```

###### Iteration 2 (`i = 1`)
- `candidates[1] = 3`
- `target = 3 - 3 = 0`
- `currentCombination = [2, 2, 3]`

####### Fifth Call to `backtrack`
```javascript
backtrack(1, 0, [2, 2, 3])
```
- **Base case reached** (`target = 0`)
- Add `[2, 2, 3]` to `result`

- Backtrack (pop the last element)
- `currentCombination = [2, 2]`

###### Return to Third Call
```javascript
backtrack(0, 3, [2, 2])
```

###### Iteration 3 (`i = 2`)
- `candidates[2] = 6`
- `target = 3 - 6 = -3`
- **Skip this iteration** (since `candidates[2] > target`)

###### Iteration 4 (`i = 3`)
- `candidates[3] = 7`
- `target = 3 - 7 = -4`
- **Skip this iteration** (since `candidates[3] > target`)

- Backtrack (pop the last element)
- `currentCombination = [2]`

##### Return to Second Call
```javascript
backtrack(0, 5, [2])
```

##### Iteration 2 (`i = 1`)
- `candidates[1] = 3`
- `target = 5 - 3 = 2`
- `currentCombination = [2, 3]`

###### Sixth Call to `backtrack`
```javascript
backtrack(1, 2, [2, 3])
```

###### Iteration 1 (`i = 1`)
- `candidates[1] = 3`
- `target = 2 - 3 = -1`
- **Skip this iteration** (since `candidates[1] > target`)

###### Iteration 2 (`i = 2`)
- `candidates[2] = 6`
- `target = 2 - 6 = -4`
- **Skip this iteration** (since `candidates[2] > target`)

###### Iteration 3 (`i = 3`)
- `candidates[3] = 7`
- `target = 2 - 7 = -5`
- **Skip this iteration** (since `candidates[3] > target`)

- Backtrack (pop the last element)
- `currentCombination = [2]`

##### Return to Second Call
```javascript
backtrack(0, 5, [2])
```

##### Iteration 3 (`i = 2`)
- `candidates[2] = 6`
- `target = 5 - 6 = -1`
- **Skip this iteration** (since `candidates[2] > target`)

##### Iteration 4 (`i = 3`)
- `candidates[3] = 7`
- `target = 5 - 7 = -2`
- **Skip this iteration** (since `candidates[3] > target`)

- Backtrack (pop the last element)
- `currentCombination = []`

### Return to First Call
```javascript
backtrack(0, 7, [])
```

#### Iteration 2 (`i = 1`)
- `candidates[1] = 3`
- `target = 7 - 3 = 4`
- `currentCombination = [3]`

##### Seventh Call to `backtrack`
```javascript
backtrack(1, 4, [3])
```

##### Iteration 1 (`i = 1`)
- `candidates[1] = 3`
- `target = 4 - 3 = 1`
- `currentCombination = [3, 3]`

###### Eighth Call to `backtrack`
```javascript
backtrack(1, 1, [3, 3])
```

###### Iteration 1 (`i = 1`)
- `candidates[1] = 3`
- `target = 1 - 3 = -2`
- **Skip this iteration** (since `candidates[1] > target`)

###### Iteration 2 (`i = 2`)
- `candidates[2] = 6`
- `target = 1 - 6 = -5`
- **Skip this iteration** (since `candidates[2] > target`)

###### Iteration 3 (`i = 3`)
- `candidates[3] = 7`
- `target = 1 - 7 = -6`
- **Skip this iteration** (since `candidates[3] > target`)

- Backtrack (pop the last element)
- `currentCombination = [3]`

##### Return to Seventh Call
```javascript
backtrack(1, 4, [3])
```

##### Iteration 2 (`i = 2`)
- `candidates[2] = 6`
- `target = 4 - 6 = -2`
- **Skip this iteration** (since `candidates[2] > target`)

##### Iteration 3 (`i = 3`)
- `candidates[3] = 7`
- `target = 4 - 7 = -3`
- **Skip this iteration** (since `candidates[3] > target`)

- Backtrack (pop the last element)
- `currentCombination = []`

### Return to First Call
```javascript
backtrack(0, 7, [])
```

#### Iteration 3 (`i = 2`)
- `candidates[2] = 6`
- `target = 7 - 6 = 1`
- `currentCombination = [6]`

##### Ninth Call to `backtrack`
```javascript
backtrack(2, 1, [6])
```

##### Iteration 1 (`i = 2`)
- `candidates[2] = 6`
- `target = 1 - 6 = -5`
- **Skip this iteration** (since `candidates[2] > target`)

##### Iteration 2 (`i = 3`)
- `candidates[3] = 7`
- `target = 1 - 7 = -6`
- **Skip this iteration** (since `candidates[3] > target`)

- Backtrack (pop the last element)
- `currentCombination = []`

### Return to First Call
```javascript
backtrack(0, 7, [])
```

#### Iteration 4 (`i = 3`)
- `candidates[3] = 7`
- `target = 7 - 7 = 0`
- `currentCombination = [7]`

##### Tenth Call to `backtrack`
```javascript
backtrack(3,

 0, [7])
```
- **Base case reached** (`target = 0`)
- Add `[7]` to `result`

- Backtrack (pop the last element)
- `currentCombination = []`

### Final Result
The final result is:
```javascript
[[2, 2, 3], [7]]
```
 */

//----------------------striver's solution --------------------//
//NOTE - hover on the combinationSum function to see the dry run 
var combinationSum  = function(candidates , target){
    let result = [];
    function backtrack(index , currentTarget , currentCombination){
        if(currentTarget === 0 ){
            result.push([...currentCombination]);
            return
        }
        if(index >= candidates.length || currentTarget< 0 ){
            return
        }
         // Include the candidate at the current index
         currentCombination.push(candidates[index]);
         backtrack(index , currentTarget - candidates[index] , currentCombination);
         currentCombination.pop();
         // Do not include the candidate at the current index
        backtrack(index + 1, currentTarget, currentCombination);
    }
    backtrack(0 , target , []);
    return result
}
let candidates = [2, 3, 6, 7];
let target = 7;
console.log(combinationSum(candidates, target));
