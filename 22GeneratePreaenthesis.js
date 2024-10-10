//---> for this answer checkout this=>https://www.youtube.com/watch?v=WW1rYrR3tTI
// var generateParenthesis = function(n) {
//     function backtrack(S='', open=0, close=0) {
//         if (S.length === 2 * n) {
//             result.push(S);
//             return;
//         }
//         if (open < n) {
//             backtrack(S + '(', open + 1, close);
//         }
//         if (close < open) {
//             backtrack(S + ')', open, close + 1);
//         }
//     }

//     let result = [];
//     backtrack();
//     return result;
// };

// let n = 2 ;
// let res = generateParenthesis(n);
// console.log(res)

//--> Link for Youtube =>https://www.youtube.com/watch?v=7xkPbffc6

var generateParentheses = function(n) {
  let result = [];
  
  function isValid(currentString) {
      let count = 0;
      for (let char of currentString) {
          if (char === '(') {
              count++;
          } else {
              count--;
          }
          if (count < 0) {
              return false;
          }
      }
    return count ===0 // jab count zero ho tbki condition return krni he
  }
  
  function backtrack(currentString) {
      if (currentString.length === 2 * n) {
          if (isValid(currentString)) {
              result.push(currentString);
          }
          return;
      }
      
      backtrack(currentString + '(');
      backtrack(currentString + ')');
  }
  
  backtrack('');
  return result;
};

// Example usage
console.log(generateParentheses(3));

/***
 *                           ""
                   /               \
                "("                 ")"
              /     \              (invalid)
          "(("     "()"  
          /   \       \
      "((("   "(()"  "()(" 
      /   \      (invalid)   \
"(())"  "(()("            "()()" 

Valid Combinations: "(()", "(())", "()()", which simplifies to ["(())", "()()"]

 */