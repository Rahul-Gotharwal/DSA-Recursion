/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const totalSum = nums.reduce((a, b) => a + b, 0);
    
    // If total sum is odd, it's impossible to partition it into two equal subsets
    if (totalSum % 2 !== 0) return false;
    
    const target = totalSum / 2;
    const dp = new Array(target + 1).fill(false);
    dp[0] = true;  // base case: a subset with sum 0 is always possible

    for (let num of nums) {
        for (let j = target; j >= num; j--) {
            dp[j] = dp[j] || dp[j - num];
        }
    }

    return dp[target];
};

// Example usage:
const nums = [1, 5, 11, 5];
console.log(canPartition(nums));  // Output: true
