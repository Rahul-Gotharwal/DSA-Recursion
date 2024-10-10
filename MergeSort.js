function MergeSort(arr, low, high) {
  if (low >= high) {
    return;
  }
  let mid = Math.floor((low + high) / 2);
  MergeSort(arr, low, mid);
  MergeSort(arr, mid + 1, high);
  Merge(arr, low, mid, high);
}
function  Merge(arr , low , mid , high){ // in first call the low is 0 mid is also 0 and high is 1 
    let left = arr.slice(low , mid+1); // yha pe new array create nhi hua he yha pe humne main array ka use krke  left k andar value dali he low to mid+1 tk that is [3] only 
    let right = arr.slice(mid+1 , high+1);
    let i =0 , j=0 , k = low // low is the starting index ,like from 0 to end
    while(i<left.length && j<right.length){
        if(left[i]<=right[j]){
           // arr[k++] = left[i++]
           arr[k] = left[i]
            i++;
            k++
        }else{
           // arr[k++] = right[j++]
           arr[k] = right[j]
           j++;
           k++;
        }
    }
    // while(i<left.length){
    //     arr[k++] = left[i++]
    // }
    // while(j<right.length){
    //     arr[k++] = right[j++]
    // }
    //NOTE - we can use the above code also
     // Copy any remaining elements from the left array
    while (i < left.length) {
        arr[k] = left[i];
        i++;
        k++;
    }
    // Copy any remaining elements from the right array
    while (j < right.length) {
        arr[k] = right[j];
        j++;
        k++;
    }
}
let arr = [3, 1, 2, 4, 1, 5, 2, 6, 4];
MergeSort(arr, 0, arr.length - 1);
console.log(arr);

/**
 * Sure, let's dry run the code step by step with the array `[3, 1, 2, 4, 1, 5, 2, 6, 4]`.

### Initial Call:
```javascript
mergeSort(arr, 0, 8)
```

### First Level of Recursion:
- **Calculate mid**: `mid = Math.floor((0 + 8) / 2) = 4`
- **Recursively call mergeSort on left half**: 
  ```javascript
  mergeSort(arr, 0, 4)
  ```

### Second Level of Recursion (Left Half):
- **Calculate mid**: `mid = Math.floor((0 + 4) / 2) = 2`
- **Recursively call mergeSort on left half**:
  ```javascript
  mergeSort(arr, 0, 2)
  ```

### Third Level of Recursion (Left Half of Left Half):
- **Calculate mid**: `mid = Math.floor((0 + 2) / 2) = 1`
- **Recursively call mergeSort on left half**:
  ```javascript
  mergeSort(arr, 0, 1)
  ```

### Fourth Level of Recursion (Left Half of Left Half of Left Half):
- **Calculate mid**: `mid = Math.floor((0 + 1) / 2) = 0`
- **Recursively call mergeSort on left half**:
  ```javascript
  mergeSort(arr, 0, 0)
  ```
  - **Base case reached**, so return.
- **Recursively call mergeSort on right half**:
  ```javascript
  mergeSort(arr, 1, 1)
  ```
  - **Base case reached**, so return.
- **Call merge on (0, 0, 1)**:
  - **Left array**: `[3]`
  - **Right array**: `[1]`
  - **Merge**:
    - Compare `3` and `1`, place `1` in the array.
    - Place remaining `3` in the array.
  - **Result**: `[1, 3, 2, 4, 1, 5, 2, 6, 4]`

### Third Level of Recursion (Right Half of Left Half):
- **Recursively call mergeSort**:
  ```javascript
  mergeSort(arr, 2, 2)
  ```
  - **Base case reached**, so return.
- **Call merge on (0, 1, 2)**:
  - **Left array**: `[1, 3]`
  - **Right array**: `[2]`
  - **Merge**:
    - Compare `1` and `2`, place `1` in the array.
    - Compare `3` and `2`, place `2` in the array.
    - Place remaining `3` in the array.
  - **Result**: `[1, 2, 3, 4, 1, 5, 2, 6, 4]`

### Second Level of Recursion (Right Half):
- **Recursively call mergeSort**:
  ```javascript
  mergeSort(arr, 3, 4)
  ```
- **Calculate mid**: `mid = Math.floor((3 + 4) / 2) = 3`
- **Recursively call mergeSort on left half**:
  ```javascript
  mergeSort(arr, 3, 3)
  ```
  - **Base case reached**, so return.
- **Recursively call mergeSort on right half**:
  ```javascript
  mergeSort(arr, 4, 4)
  ```
  - **Base case reached**, so return.
- **Call merge on (3, 3, 4)**:
  - **Left array**: `[4]`
  - **Right array**: `[1]`
  - **Merge**:
    - Compare `4` and `1`, place `1` in the array.
    - Place remaining `4` in the array.
  - **Result**: `[1, 2, 3, 1, 4, 5, 2, 6, 4]`

### Call merge on (0, 2, 4):
- **Left array**: `[1, 2, 3]`
- **Right array**: `[1, 4]`
- **Merge**:
  - Compare `1` and `1`, place `1` in the array.
  - Compare `2` and `1`, place `1` in the array.
  - Compare `2` and `4`, place `2` in the array.
  - Compare `3` and `4`, place `3` in the array.
  - Place remaining `4` in the array.
- **Result**: `[1, 1, 2, 3, 4, 5, 2, 6, 4]`

### First Level of Recursion (Right Half):
- **Recursively call mergeSort**:
  ```javascript
  mergeSort(arr, 5, 8)
  ```
- **Calculate mid**: `mid = Math.floor((5 + 8) / 2) = 6`
- **Recursively call mergeSort on left half**:
  ```javascript
  mergeSort(arr, 5, 6)
  ```

### Second Level of Recursion (Left Half):
- **Calculate mid**: `mid = Math.floor((5 + 6) / 2) = 5`
- **Recursively call mergeSort on left half**:
  ```javascript
  mergeSort(arr, 5, 5)
  ```
  - **Base case reached**, so return.
- **Recursively call mergeSort on right half**:
  ```javascript
  mergeSort(arr, 6, 6)
  ```
  - **Base case reached**, so return.
- **Call merge on (5, 5, 6)**:
  - **Left array**: `[5]`
  - **Right array**: `[2]`
  - **Merge**:
    - Compare `5` and `2`, place `2` in the array.
    - Place remaining `5` in the array.
  - **Result**: `[1, 1, 2, 3, 4, 2, 5, 6, 4]`

### Second Level of Recursion (Right Half):
- **Recursively call mergeSort**:
  ```javascript
  mergeSort(arr, 7, 8)
  ```
- **Calculate mid**: `mid = Math.floor((7 + 8) / 2) = 7`
- **Recursively call mergeSort on left half**:
  ```javascript
  mergeSort(arr, 7, 7)
  ```
  - **Base case reached**, so return.
- **Recursively call mergeSort on right half**:
  ```javascript
  mergeSort(arr, 8, 8)
  ```
  - **Base case reached**, so return.
- **Call merge on (7, 7, 8)**:
  - **Left array**: `[6]`
  - **Right array**: `[4]`
  - **Merge**:
    - Compare `6` and `4`, place `4` in the array.
    - Place remaining `6` in the array.
  - **Result**: `[1, 1, 2, 3, 4, 2, 5, 4, 6]`

### Call merge on (5, 6, 8):
- **Left array**: `[2, 5]`
- **Right array**: `[4, 6]`
- **Merge**:
  - Compare `2` and `4`, place `2` in the array.
  - Compare `5` and `4`, place `4` in the array.
  - Compare `5` and `6`, place `5` in the array.
  - Place remaining `6` in the array.
- **Result**: `[1, 1, 2, 3, 4, 2, 4, 5, 6]`

### Call merge on (0, 4, 8):
- **Left array**: `[1, 1, 2, 3, 4]`
- **Right array**: `[2, 4, 5, 6]`
- **Merge**:
  - Compare `1` and `2`, place `1` in the array.
  - Compare `1` and `2`, place `1` in the array.
  - Compare `2` and `2`, place `2` in the array.
  - Compare `3` and `2`, place `2` in the array.
  - Compare `3` and `4`, place `3` in the array.
  - Compare `4` and `4`, place `4` in the array.
  - Compare `4` and `5`, place `4` in the array.
  - Compare `5` and `5`, place `5` in the array.
  - Place remaining `6` in the array.
- **Result**: `[1, 1, 2, 2, 3, 4, 4, 5, 6]`

### Final Output:
```javascript
console.log(arr); // [1, 1, 2, 2, 3, 4, 4, 5, 6
 */

