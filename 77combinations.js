//---------------------Leetcode ------------------------//

var combine = function(n, k) {
    let res = [];
    const backtrack = (start = 1, combination = [] ) => {
         if (combination.length === k) {
             res.push([...combination])
             return
         }
         for  ( let i = start; i<=n ; i++ ) {
             combination.push(i);
             backtrack(i+1, combination); // i+1 k sath jitne psosibleti bn skti he jab tk condion false na ho tb tk combinations array me push krte rhenge
             combination.pop()
         }
    } 
    backtrack();
    return res
 };
let n = 4, k = 2
console.log(combine(n,k))


//-->https://www.youtube.com/watch?v=QQ9Tn2i269I best to watch

//-------------------------1-Appraoch-----------------------//
// function solve(start, n, k, temp, result) {
//     if (k === 0) {
//         result.push([...temp]);
//         return;
//     }
//     if (start > n) {
//         return;
//     }
//     temp.push(start);
//     solve(start + 1, n, k - 1, temp, result);
//     temp.pop();
//     solve(start + 1, n, k, temp, result);
// }

// function combine(n, k) {
//     const result = [];
//     solve(1, n, k, [], result);
//     return result;
// }

// // Example usage:
// const n = 4, k = 2;
// console.log(combine(n, k));


/***
 *                               solve(1, 4, 2, [])
                             /                  \
                 [1] solve(2, 4, 1, [1])     solve(2, 4, 2, [])
                /            \                /            \
      [1, 2] solve(3, 4, 0, [1, 2])   solve(3, 4, 1, [1]) solve(3, 4, 2, [])
                |                       /        \           /           \
      result = [[1, 2]]      [1, 3] solve(4, 4, 0, [1, 3])  ...           ...
                |                          /        \         \
         Backtrack to [1]   result = [[1, 2], [1, 3]]        ...
                |                          |                 ...
        solve(3, 4, 1, [1])        Backtrack to [1]
                /                       /
       [1, 3] solve(4, 4, 0, [1, 3])
                |                       \
  result = [[1, 2], [1, 3], [1, 4]]    solve(4, 4, 1, [1])

 */

  //------------------------Apparaoch-2---------------------------//
// function combine(n , k){
//     const result = [];
//     const temp = [];
//     function solve(start , n , k , temp){
//         if(k===0){
//             result.push([...temp]);
//             return
//         }
//         for(let i =start;i<=n ; i++){
//             temp.push(i);
//             solve(i+1,n , k-1 , temp);
//             temp.pop()
//         }
//     }
//     solve(1,n,k,temp);
//     return result
// }

// const n = 4, k = 2;
// console.log(combine(n, k));