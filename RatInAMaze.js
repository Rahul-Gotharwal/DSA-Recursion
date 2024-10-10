function findPathHelper(i, j, m, n, ans, move, vis) {
    if (i === n - 1 && j === n - 1) {
      ans.push(move);
      return;
    }
  
    // downward
    if (i + 1 < n && !vis[i + 1][j] && m[i + 1][j] === 1) {
        // about if condtion 
        // chack that it should be in the boundary && should not be visited && or next should be 1
      vis[i][j] = 1;
      findPathHelper(i + 1, j, m, n, ans, move + 'D', vis);
      vis[i][j] = 0; 
      // we marked it as 0 bcz according to the conditions we should not move on the zeros , so marked means do it zero in the matix so when condtions check we dont go on them
    }
   
    // left
    if (j - 1 >= 0 && !vis[i][j - 1] && m[i][j - 1] === 1) {
      vis[i][j] = 1;
      findPathHelper(i, j - 1, m, n, ans, move + 'L', vis);
      vis[i][j] = 0;
    }
  
    // right 
    if (j + 1 < n && !vis[i][j + 1] && m[i][j + 1] === 1) {
      vis[i][j] = 1;
      findPathHelper(i, j + 1, m, n, ans, move + 'R', vis);
      vis[i][j] = 0;
    }
  
    // upward
    if (i - 1 >= 0 && !vis[i - 1][j] && m[i - 1][j] === 1) {
      vis[i][j] = 1;
      findPathHelper(i - 1, j, m, n, ans, move + 'U', vis);
      vis[i][j] = 0;
    }
  }
  
  function findPath(m, n) {
    let ans = [];
    let vis = Array.from({ length: n }, () => Array(n).fill(0));
    if (m[0][0] === 1) {
      findPathHelper(0, 0, m, n, ans, "", vis);
    }
    return ans;
  }
  
  // Test the solution
  let n = 4;
  let m = [
    [1, 0, 0, 0],
    [1, 1, 0, 1],
    [1, 1, 0, 0],
    [0, 1, 1, 1]
  ];
  
  let result = findPath(m, n);
  if (result.length === 0) {
    console.log(-1);
  } else {
    console.log(result.join(" "));
  }
  