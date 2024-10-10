// function solveNQueens(n) {
//     const solutions = [];
//     const board = Array.from({ length: n }, () => Array(n).fill('.'));
  
//     function isSafe(row, col) {
//       // Check column
//       for (let i = 0; i < row; i++) {
//         if (board[i][col] === 'Q') {
//           return false;
//         }
//       }
//       // Check upper left diagonal
//       for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
//         if (board[i][j] === 'Q') {
//           return false;
//         }
//       }
//       // Check upper right diagonal
//       for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
//         if (board[i][j] === 'Q') {
//           return false;
//         }
//       }
//       return true;
//     }
  
//     function placeQueens(row) {
//       if (row === n) {
//         solutions.push(board.map(r => r.join('')));
//         return;
//       }
//       for (let col = 0; col < n; col++) {
//         if (isSafe(row, col)) {
//           board[row][col] = 'Q';
//           placeQueens(row + 1);
//           board[row][col] = '.'; // Backtrack
//         }
//       }
//     }
  
//     placeQueens(0);
//     return solutions;
//   }
  
//   // Example usage:
//   const n = 4;
//   console.log(solveNQueens(n));
  

///------------------Strivers solutin-------------------------//
function isSafe(row, col, board, n) {
    let duprow = row;
    let dupcol = col;

    // Check upper diagonal on left side
    while (row >= 0 && col >= 0) {
        if (board[row][col] === 'Q') return false;
        row--;
        col--;
    }

    col = dupcol;
    row = duprow;
    // Check left side
    while (col >= 0) {
        if (board[row][col] === 'Q') return false;
        col--;
    }

    col = dupcol;
    row = duprow;
    // Check lower diagonal on left side
    while (row < n && col >= 0) {
        if (board[row][col] === 'Q') return false;
        row++;
        col--;
    }
    return true;
}

function solve(col, board, ans, n) {
    if (col === n) {
        ans.push(board.map(row => row.join('')));
        return;
    }
    for (let row = 0; row < n; row++) {
        if (isSafe(row, col, board, n)) {
            board[row][col] = 'Q';
            solve(col + 1, board, ans, n);
            board[row][col] = '.';
        }
    }
}

function solveNQueens(n) {
    let ans = [];
    let board = Array.from({ length: n }, () => Array(n).fill('.'));
    solve(0, board, ans, n);
    return ans;
}

// Example usage
const n = 4;
const ans = solveNQueens(n);
ans.forEach((arrangement, index) => {
    console.log(`Arrangement ${index + 1}`); 
    arrangement.forEach(row => {
        console.log(row);
    });
    console.log('');
});
