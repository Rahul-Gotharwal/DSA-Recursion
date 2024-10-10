//apparoch and intuttion
/**
 * original number: 543
reverse number: 0

//Get the last digit of the original number
original % 10 = 543 % 10 = 3
//Put this digit as the last one in the reverse number
reverse * 10 + digit = 0 * 10 + 3 = 0 + 3 = 3
reverse: 3
//Remove this digit from the original number
original / 10 = 543 / 10 = 54.3
~~54.3 = 54
original: 54

//Repeat
original % 10 = 54 % 10 = 4
reverse * 10 + digit = 3 * 10 + 4 = 30 + 4 = 34
reverse: 34
original / 10 = 54 / 10 = 5.4
~~5.4 = 5
original: 5

//Repeat
original % 10 = 5 % 10 = 5
reverse * 10 + digit = 34 * 10 + 5 = 340 + 5 = 345
reverse: 345
original / 10 = 5 / 10 = 0.5
~~0.5 = 0
original: 0

input: 543
output: 345
 */

var isPalindrome = function(x) {
    var reverse = 0;
    var copy = x;

    //The loop break when the copy of original number becomes zero
    //Also negative number cannot be a palindrome
    while (copy > 0) {
      const digit = copy % 10;
      reverse = reverse * 10 + digit;
      copy = ~~(copy / 10);
    }

    return reverse == x;
};
let x = 121
console.log(isPalindrome(x))