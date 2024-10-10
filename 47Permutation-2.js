//-->https://www.youtube.com/watch?v=YW5F0WqBBWY
var permuteUnique = function (nums) {
  const result = [];
  function backtrack(start) {
    if (start === nums.length) {
      result.push([...nums]); // Found a valid permutation, push a copy of nums into result
      return;
    }
    const seen = new Set();
    for (let i = start; i < nums.length; i++) {
      if (seen.has(nums[i])) continue; // Skip duplicates
      seen.add(nums[i]); // Add current number to the set of seen numbers
      // Swap nums[start] with nums[i]
      [nums[start], nums[i]] = [nums[i], nums[start]];
      // Recursively call backtrack to generate permutations
      backtrack(start + 1);
      // Backtrack by swapping back to restore the original array
      [nums[start], nums[i]] = [nums[i], nums[start]];
    }
  }
  backtrack(0); // Start backtracking from index 0
  return result; // Return the list of unique permutations
};
let nums = [1, 1, 2];
console.log(permuteUnique(nums));


/**
 *                     backtrack(0) - nums = [1, 1, 2]
                   /            |              \
          [1,1,2]           Skip 1           [2,1,1]
         /        \                            /   \
  [1,1,2]       [1,2,1]                 [2,1,1]   Skip 1
   /  \           /   \                   /    \
[1,1,2]        [1,2,1]             [2,1,1]   [2,1,1]

 */

/**
 * Initial Setup:

    Input: nums = [1, 1, 2]
    result array to store unique permutations.
    backtrack function to generate permutations recursively.

Step-by-Step Execution:

    Initial Call: backtrack(0)
        start = 0, nums = [1, 1, 2], result = []

    Inside backtrack Function:
        First Iteration (start = 0):

            seen = {}

            Loop through indices from start to end of nums (i = 0 to 2):

            For i = 0:

                nums = [1, 1, 2], seen = {}

                Swap nums[start] with nums[i]:

                    nums = [1, 1, 2] (no change since nums[start] and nums[i] are the same)

                    Recursive Call: backtrack(1)

                    Inside backtrack(1):

                        start = 1, nums = [1, 1, 2]

                        seen = {}

                        Loop through indices from start to end of nums (i = 1 to 2):

                        For i = 1:

                            nums = [1, 1, 2], seen = {}

                            Swap nums[start] with nums[i]:

                                nums = [1, 1, 2] (no change)

                                Recursive Call: backtrack(2)

                                Inside backtrack(2):
                                    start = 2, nums = [1, 1, 2]
                                    seen = {}
                                    Since start === nums.length, we found a permutation:
                                        Add [1, 1, 2] to result: result = [[1, 1, 2]]

                                Backtrack by swapping back: nums = [1, 1, 2] (restore original state)

                            Move to next iteration (i = 2)

                        For i = 2:
                            nums = [1, 1, 2], seen = {}
                            Swap nums[start] with nums[i]:

                                nums = [1, 2, 1]

                                Recursive Call: backtrack(2)

                                Inside backtrack(2):
                                    start = 2, nums = [1, 2, 1]
                                    seen = {}
                                    Since start === nums.length, we found a permutation:
                                        Add [1, 2, 1] to result: result = [[1, 1, 2], [1, 2, 1]]

                                Backtrack by swapping back: nums = [1, 1, 2] (restore original state)

                        Backtrack by swapping back: nums = [1, 1, 2] (restore original state)

                    Move to next iteration (i = 1)

                For i = 1 (duplicate, skip this iteration due to seen set)

                For i = 2:
                    nums = [1, 1, 2], seen = {}
                    Swap nums[start] with nums[i]:

                        nums = [2, 1, 1]

                        Recursive Call: backtrack(1)

                        Inside backtrack(1):

                            start = 1, nums = [2, 1, 1]

                            seen = {}

                            Loop through indices from start to end of nums (i = 1 to 2):

                            For i = 1:

                                nums = [2, 1, 1], seen = {}

                                Swap nums[start] with nums[i]:

                                    nums = [2, 1, 1] (no change)

                                    Recursive Call: backtrack(2)

                                    Inside backtrack(2):

                                        start = 2, nums = [2, 1, 1]

                                        seen = {}

                                        Since start === nums.length, we found a permutation:
                                            Add [2, 1, 1] to result: result = [[1, 1, 2], [1, 2, 1], [2, 1, 1]]

                                        Backtrack by swapping back: nums = [2, 1, 1] (restore original state)

                                Move to next iteration (i = 2)

                            For i = 2:

                                nums = [2, 1, 1], seen = {}

                                Swap nums[start] with nums[i]:

                                    nums = [2, 1, 1] (no change)

                                    Recursive Call: backtrack(2)

                                    Inside backtrack(2):

                                        start = 2, nums = [2, 1, 1]

                                        seen = {}

                                        Since start === nums.length, we found a permutation:
                                            Add [2, 1, 1] to result: result = [[1, 1, 2], [1, 2, 1], [2, 1, 1]]

                                        Backtrack by swapping back: nums = [2, 1, 1] (restore original state)

                                Backtrack by swapping back: nums = [2, 1, 1] (restore original state)

                        Move to next iteration (i = 1)

                For i = 1 (duplicate, skip this iteration due to seen set)

                For i = 2:
                    nums = [1, 1, 2], seen = {}
                    Swap nums[start] with nums[i]:

                        nums = [1, 2, 1]

                        Recursive Call: backtrack(1)

                        Inside backtrack(1):

                            start = 1, nums = [1, 2, 1]

                            seen = {}

                            Loop through indices from start to end of nums (i = 1 to 2):

                            For i = 1:

                                nums = [1, 2, 1], seen = {}

                                Swap nums[start] with nums[i]:

                                    nums = [1, 2, 1] (no change)

                                    Recursive Call: backtrack(2)

                                    Inside backtrack(2):

                                        start = 2, nums = [1, 2, 1]

                                        seen = {}

                                        Since start === nums.length, we found a permutation:
                                            Add [1, 2, 1] to result: result = [[1, 1, 2], [1, 2, 1], [2, 1, 1]]

                                        Backtrack by swapping back: nums = [1, 2, 1] (restore original state)

                                Move to next iteration (i = 2)

                            For i = 2:

                                nums = [1, 2, 1], seen = {}

                                Swap nums[start] with nums[i]:

                                    nums = [1, 2, 1] (no change)

                                    Recursive Call: backtrack(2)

                                    Inside backtrack(2):

                                        start = 2, nums = [1, 2, 1]

                                        seen = {}

                                        Since start === nums.length, we found a permutation:
                                            Add [1, 2, 1] to result: result = [[1, 1, 2], [1, 2, 1], [2, 1, 1]]

                                        Backtrack by swapping back: nums = [1, 2, 1] (restore original state)

                                Backtrack by swapping back: nums = [1, 2, 1] (restore original state)

                        Move to next iteration (i = 1)

                Backtrack by swapping back: nums = [1, 1, 2] (restore original state)
 */