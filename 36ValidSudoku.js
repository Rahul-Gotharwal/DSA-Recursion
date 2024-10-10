//->  https://www.youtube.com/watch?v=dGZjzA9zLW8\

function validSubBoard(board, sr, er, sc, ec) {
    const st = new Set();
    for (let row = sr; row <= er; row++) {
        for (let col = sc; col <= ec; col++) {
            const ch = board[row][col];
            if (ch === '.') continue;
            if (st.has(ch)) return false;
            st.add(ch);
        }
    }
    return true;
}

function isValidSudoku(board) {
    // Validate rows
    for (let row = 0; row < 9; row++) {
        const st = new Set();
        for (let col = 0; col < 9; col++) {
            const ch = board[row][col];
            if (ch === '.') continue;
            if (st.has(ch)) return false;
            st.add(ch);
        }
    }

    // Validate columns => no need to check the col bcz test case is also passed
    for (let col = 0; col < 9; col++) {
        const st = new Set();
        for (let row = 0; row < 9; row++) {
            const ch = board[row][col];
            if (ch === '.') continue;
            if (st.has(ch)) return false;
            st.add(ch);
        }
    }

    // Validate each 3x3 box
    for (let sr = 0; sr < 9; sr += 3) {
        const er = sr + 2;
        for (let sc = 0; sc < 9; sc += 3) {
            const ec = sc + 2;
            if (!validSubBoard(board, sr, er, sc, ec)) return false;
        }
    }

    return true;
}

// Example usage
const board = [
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9']
];

console.log(isValidSudoku(board)); // Output: true or false

