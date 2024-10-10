function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        // Partition the array
        let pi = partition(arr, low, high);
        // Recursively sort the subarrays
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

function partition(arr, low, high) {
    // Choose the pivot element
    let pivot = arr[low];
    let i = low + 1;
    let j = high;

    while (i<=j) {
        // Find the first element greater than or equal to pivot from the left
        while (i <= j && arr[i] <= pivot) {
            i++;
            // chota element he to aage bdh jao kyki hmko left me chote eleemnts chahiye
        }

        // Find the first element less than or equal to pivot from the right
        while (i <= j && arr[j] >= pivot) {
            j--;
        }      // bda element he to aage bdh jao kyki hmko right me bde eleemnts chahiye


        if (i <= j) {
            // Swap the elements
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++ 
            j--
        } else {
            break;
        }
    }

    // Place the pivot element in its correct position
    [arr[low], arr[j]] = [arr[j], arr[low]];
    
    return j;
}

// Example usage:
let arr = [4, 6, 2, 7, 3, 1, 9, 5];
quickSort(arr);
console.log(arr); // Output: [1, 2, 3, 4, 5, 6, 7, 9]

/**
 * Certainly! Let's dry run the Quick Sort code with a detailed explanation of the while loops, particularly focusing on when and why `i++` and `j--` occur.

### Initial Array:
```javascript
let arr = [4, 6, 2, 7, 3, 1, 9, 5];
quickSort(arr);
```

### Initial Call:
```javascript
quickSort(arr, 0, arr.length - 1);
```
- `low = 0`, `high = 7`

### First Call to `partition`:
```javascript
partition(arr, 0, 7);
```
- Pivot = `arr[0] = 4`
- Initial pointers: `i = low + 1 = 1`, `j = high = 7`

#### First while loop (`i` pointer):
1. `arr[i] = arr[1] = 6`
   - `6 > 4` (pivot), so `i` stops at 1.

#### Second while loop (`j` pointer):
1. `arr[j] = arr[7] = 5`
   - `5 > 4` (pivot), so `j--` to 6.
2. `arr[j] = arr[6] = 9`
   - `9 > 4` (pivot), so `j--` to 5.
3. `arr[j] = arr[5] = 1`
   - `1 < 4` (pivot), so `j` stops at 5.

#### Swap:
Since `i <= j`, swap `arr[i]` and `arr[j]`:
```javascript
[arr[1], arr[5]] = [arr[5], arr[1]]; // Swap 6 and 1
// Array becomes: [4, 1, 2, 7, 3, 6, 9, 5]
i++ to 2, j-- to 4
```

#### Continue while loop (`i` pointer):
1. `arr[i] = arr[2] = 2`
   - `2 < 4` (pivot), so `i++` to 3.
2. `arr[i] = arr[3] = 7`
   - `7 > 4` (pivot), so `i` stops at 3.

#### Continue while loop (`j` pointer):
1. `arr[j] = arr[4] = 3`
   - `3 < 4` (pivot), so `j--` to 3.

#### Swap:
Since `i <= j`, swap `arr[i]` and `arr[j]`:
```javascript
[arr[3], arr[4]] = [arr[4], arr[3]]; // Swap 7 and 3
// Array becomes: [4, 1, 2, 3, 7, 6, 9, 5]
i++ to 4, j-- to 2
```

Now, `i > j`, so the while loop ends.

#### Place Pivot:
Swap the pivot `arr[low]` with `arr[j]`:
```javascript
[arr[0], arr[2]] = [arr[2], arr[0]]; // Swap 4 and 2
// Array becomes: [2, 1, 4, 3, 7, 6, 9, 5]
```
Return `j = 2`.

### Recursive Calls:
#### Left Subarray:
```javascript
quickSort(arr, 0, 1);
```
#### Right Subarray:
```javascript
quickSort(arr, 3, 7);
```

### Sorting Left Subarray `[2, 1]`:
1. `quickSort(arr, 0, 1);`
   - `partition(arr, 0, 1);`
   - Pivot = `arr[0] = 2`, `i = 1`, `j = 1`
2. `arr[i] = arr[1] = 1`
   - `1 < 2` (pivot), so `i++` to 2.

3. `j = 1`
   - `j` stops at 1.

#### Swap:
```javascript
[arr[0], arr[1]] = [arr[1], arr[0]]; // Swap 2 and 1
// Array becomes: [1, 2, 4, 3, 7, 6, 9, 5]
```
Return `j = 1`.

#### Further Recursive Calls:
- `quickSort(arr, 0, 0);` (Base case, returns immediately)
- `quickSort(arr, 2, 1);` (Base case, returns immediately)

### Sorting Right Subarray `[3, 7, 6, 9, 5]`:
1. `quickSort(arr, 3, 7);`
   - `partition(arr, 3, 7);`
   - Pivot = `arr[3] = 3`, `i = 4`, `j = 7`
   
#### First while loop (`i` pointer):
1. `arr[i] = arr[4] = 7`
   - `7 > 3` (pivot), so `i` stops at 4.

#### Second while loop (`j` pointer):
1. `arr[j] = arr[7] = 5`
   - `5 > 3` (pivot), so `j--` to 6.
2. `arr[j] = arr[6] = 9`
   - `9 > 3` (pivot), so `j--` to 5.
3. `arr[j] = arr[5] = 6`
   - `6 > 3` (pivot), so `j--` to 4.

Since `i <= j`, swap `arr[i]` and `arr[j]`:
```javascript
[arr[4], arr[4]] = [arr[4], arr[4]]; // No swap needed
// Array remains: [1, 2, 3, 4, 7, 6, 9, 5]
i++ to 5, j-- to 3
```

Now, `i > j`, so the while loop ends.

#### Place Pivot:
```javascript
[arr[3], arr[3]] = [arr[3], arr[3]]; // No swap needed
// Array remains: [1, 2, 3, 4, 7, 6, 9, 5]
```
Return `j = 3`.

### Further Recursive Calls:
#### Left Subarray:
```javascript
quickSort(arr, 3, 2); // Base case, returns immediately
```

#### Right Subarray:
```javascript
quickSort(arr, 4, 7);
```

### Sorting `[7, 6, 9, 5]`:
1. `quickSort(arr, 4, 7);`
   - `partition(arr, 4, 7);`
   - Pivot = `arr[4] = 7`, `i = 5`, `j = 7`

#### First while loop (`i` pointer):
1. `arr[i] = arr[5] = 6`
   - `6 < 7` (pivot), so `i++` to 6.
2. `arr[i] = arr[6] = 9`
   - `9 > 7` (pivot), so `i` stops at 6.

#### Second while loop (`j` pointer):
1. `arr[j] = arr[7] = 5`
   - `5 < 7` (pivot), so `j--` to 6.

Since `i <= j`, swap `arr[i]` and `arr[j]`:
```javascript
[arr[6], arr[7]] = [arr[7], arr[6]]; // Swap 9 and 5
// Array becomes: [1, 2, 3, 4, 7, 6, 5, 9]
i++ to 7, j-- to 5
```

Now, `i > j`, so the while loop ends.

#### Place Pivot:
```javascript
[arr[4], arr[5]] = [arr[5], arr[4]]; // Swap 7 and 6
// Array becomes: [1, 2, 3, 4, 6, 5, 7, 9]
```
Return `j = 5`.

### Further Recursive Calls:
#### Left Subarray:
```javascript
quickSort(arr, 4, 4); // Base case, returns immediately
```

#### Right Subarray:
```javascript
quickSort(arr, 6, 7);
```

### Sorting `[7, 9]`:
1. `quickSort(arr, 6, 7);`
   - `partition(arr, 6, 7);`
   - Pivot = `arr[6] = 7`, `i = 7`, `j = 7`

#### First while loop (`i` pointer):
1. `arr[i] = arr[7] = 9`
   - `9 > 7` (pivot), so `i` stops at 7.

#### Second while loop (`j` pointer):
1. `arr[j] = arr[7] = 9`
   - `9 > 7` (pivot), so `j--` to 6.

Now, `i > j`, so the while loop ends

.

#### Place Pivot:
```javascript
[arr[6], arr[6]] = [arr[6], arr[6]]; // No swap needed
// Array remains: [1, 2, 3, 4, 5, 6, 7, 9]
```
Return `j = 6`.

### Further Recursive Calls:
#### Left Subarray:
```javascript
quickSort(arr, 6, 5); // Base case, returns immediately
```

#### Right Subarray:
```javascript
quickSort(arr, 7, 7); // Base case, returns immediately
```

### Final Sorted Array:
The final sorted array is `[1, 2, 3, 4, 5, 6, 7, 9]`.

### Summary:
- The `i` pointer moves rightward and stops when it finds an element greater than the pivot.
- The `j` pointer moves leftward and stops when it finds an element smaller than the pivot.
- If `i` is less than or equal to `j`, swap the elements at `i` and `j`.
- The process continues until `i > j`, at which point the pivot is placed in its correct position.
- Recursive calls are made on the subarrays to sort them individually.
 */