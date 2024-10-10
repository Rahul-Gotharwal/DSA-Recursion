function canPartitionKSubsets(nums, k) {
    const sum = nums.reduce((a, b) => a + b, 0);
    if (sum % k !== 0) return false;

    const target = sum / k;
    nums.sort((a, b) => b - a);

    if (nums[0] > target) return false;

    const used = new Array(nums.length).fill(false);

    function backtrack(index, count, currentSum) {
        if (count === k - 1) return true; // Only k-1 subsets need to be valid, the rest will be valid if total sum matches

        if (currentSum === target) return backtrack(0, count + 1, 0);

        for (let i = index; i < nums.length; i++) {
            if (!used[i] && currentSum + nums[i] <= target) {
                used[i] = true;
                if (backtrack(i + 1, count, currentSum + nums[i])) return true;
                used[i] = false;
            }
        }
        return false;
    }

    return backtrack(0, 0, 0);
}

// Example usage:
const nums1 = [4, 3, 2, 3, 5, 2, 1];
const k1 = 4;
console.log(canPartitionKSubsets(nums1, k1)); // Output: true

const nums2 = [1, 2, 3, 4];
const k2 = 3;
console.log(canPartitionKSubsets(nums2, k2)); // Output: false
