//-https://www.youtube.com/watch?v=whyax_vB8xY&t=186s
function exist(board, word) {
    const rows = board.length;
    const cols = board[0].length;

    function dfs(row, col, index) {
        if (index === word.length) {
            return true; // All characters in the word have been found
        }
        if (row < 0 || row >= rows || col < 0 || col >= cols || board[row][col] !== word[index]) {
            return false; // Out of bounds or characters do not match
        }

        // Mark the current cell as visited by changing its value to a special character
        const temp = board[row][col];
        board[row][col] = '$';

        // Explore all possible directions: up, down, left, right
        const found = dfs(row - 1, col, index + 1) || // Up
                      dfs(row + 1, col, index + 1) || // Down
                      dfs(row, col - 1, index + 1) || // Left
                      dfs(row, col + 1, index + 1);   // Right

        // Restore the current cell's value
        board[row][col] = temp;

        return found;
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === word[0] && dfs(i, j, 0)) {
                return true;
            }
        }
    }

    return false;
}

// Example usage
const board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
];
const word = "ABCCED";

console.log(exist(board, word)); // Output: true

/**
 * Let's dry run the provided code with the example board and word, and explain the base condition in detail.

### Example
**Board**:
```
[
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
]
```

**Word**: "ABCCED"

### Dry Run

#### Step-by-Step Execution

1. **Initial Call**: `exist(board, "ABCCED")`
    - Iterate through each cell in the board.
    - Start with cell `(0, 0)` which contains 'A', the first character of the word.

2. **First Recursive Call**: `dfs(0, 0, 0)`
    - `board[0][0]` matches `word[0]` ('A').
    - Mark `board[0][0]` as visited by changing its value to `$`.
    - Explore all possible directions from `(0, 0)`.

3. **Move Right**: `dfs(0, 1, 1)`
    - `board[0][1]` matches `word[1]` ('B').
    - Mark `board[0][1]` as visited by changing its value to `$`.
    - Explore all possible directions from `(0, 1)`.

4. **Move Right Again**: `dfs(0, 2, 2)`
    - `board[0][2]` matches `word[2]` ('C').
    - Mark `board[0][2]` as visited by changing its value to `$`.
    - Explore all possible directions from `(0, 2)`.

5. **Move Down**: `dfs(1, 2, 3)`
    - `board[1][2]` matches `word[3]` ('C').
    - Mark `board[1][2]` as visited by changing its value to `$`.
    - Explore all possible directions from `(1, 2)`.

6. **Move Down Again**: `dfs(2, 2, 4)`
    - `board[2][2]` matches `word[4]` ('E').
    - Mark `board[2][2]` as visited by changing its value to `$`.
    - Explore all possible directions from `(2, 2)`.

7. **Move Left**: `dfs(2, 1, 5)`
    - `board[2][1]` matches `word[5]` ('D').
    - Mark `board[2][1]` as visited by changing its value to `$`.
    - All characters in the word have been found (`index` is now 6).

8. **Base Condition**: `index === word.length` (6 == 6), return `true`.

### Base Condition Explanation

- **Base Condition**: `if (index === word.length) return true;`
    - **Purpose**: This condition checks if the current `index` has reached the length of the word.
    - **Reason to Stop Recursion**: If `index` equals the length of the word, it means all characters of the word have been successfully found in the board in sequence. Therefore, the search is complete, and the function can return `true` to indicate that the word exists in the board.

### Summary of Key Steps

- **Starting Point**: Iterate through each cell in the board to find the starting point (first character of the word).
- **Depth-First Search**: Use the `dfs` function to explore all possible directions (up, down, left, right) from the current cell.
- **Marking Visited Cells**: Temporarily change the cell's value to avoid revisiting.
- **Backtracking**: Restore the cell's original value if the current path does not lead to a solution.
- **Base Condition**: Stop recursion and return `true` when `index` equals the word length, indicating that the word has been found.

### Example Usage Output

```javascript
const board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
];
const word = "ABCCED";

console.log(exist(board, word)); // Output: true
```

This output indicates that the word "ABCCED" exists in the board, as found by the backtracking algorithm.
 */