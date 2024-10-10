//----------------------Brute Force Appraoch--------------------------//

// function numberOfInversions(a) {
//     // Count the number of pairs:
//     let cnt = 0;
//     for (let i = 0; i < a.length; i++) {
//         for (let j = i + 1; j < a.length; j++) {
//             if (a[i] > a[j]) cnt++;
//         }
//     }
//     return cnt;
// }

// const a = [5, 4, 3, 2, 1];
// const cnt = numberOfInversions(a);
// console.log("The number of inversions is: " + cnt);

//---------------------Optimal Appraoch----------------------//



function merge(arr, low, mid, high) {
    let temp = []; // temporary array
    let left = low; // starting index of left half of arr
    let right = mid + 1; // starting index of right half of arr
    
    // Modification 1: cnt variable to count the pairs:
    let cnt = 0;
    
    // storing elements in the temporary array in a sorted manner
    while (left <= mid && right <= high) {
        if (arr[left] <= arr[right]) {
            temp.push(arr[left]);
            left++;
        } else {
            temp.push(arr[right]);
            cnt += (mid - left + 1); // Modification 2
            right++;
        }
    }
    
    // if elements on the left half are still left
    while (left <= mid) {
        temp.push(arr[left]);
        left++;
    }
    
    // if elements on the right half are still left
    while (right <= high) {
        temp.push(arr[right]);
        right++;
    }
    
    // transferring all elements from temporary to arr
    for (let i = low; i <= high; i++) {
        arr[i] = temp[i - low];
    }
    
    return cnt; // Modification 3
}

function mergeSort(arr, low, high) {
    let cnt = 0;
    if (low >= high) return cnt;
    let mid = Math.floor((low + high) / 2);
    cnt += mergeSort(arr, low, mid); // left half
    cnt += mergeSort(arr, mid + 1, high); // right half
    cnt += merge(arr, low, mid, high); // merging sorted halves
    return cnt;
}

function numberOfInversions(a) {
    // Count the number of pairs:
    return mergeSort(a, 0, a.length - 1);
}

// Example usage:
let a = [5, 4, 3, 2, 1];
let cnt = numberOfInversions(a);
console.log("The number of inversions are: " + cnt);
