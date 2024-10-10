function subsets(nums) {
    let result = [];
    
    function helper(index, ds) {
        // Add the current subset to the result
        result.push([...ds]);
        // Iterate through all possible elements to include in the subset
        for (let i = index; i < nums.length; i++) {
            // Include the current element
            ds.push(nums[i]);
            // Recursively call helper for the next elements
            helper(i + 1, ds);
            // Exclude the current element (backtrack)
            ds.pop();
        }  
    }
    helper(0, []);
    return result;
}

let nums = [1, 2, 3];
console.log(subsets(nums));

/**
 *                                  []
                             /       \
                         [1]         []
                       /    \       /    \
                  [1,2]    [1]    [2]    []
                 /   \    /  \   /  \   /  \
           [1,2,3] [1,2] [1,3] [1] [2,3] [2] [3] []

 */