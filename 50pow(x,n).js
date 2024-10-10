// var myPow = function(x, n) {
//     let _p = Math.pow(x,n)
//     return _p
// };

// let x = 4  , n =2
// console.log(myPow(x,n))

//-------------------without pow function ------------------//

var myPow = function(x,n){
    if(n===0) return -1;// we can return the 1 also
    if(n<0){
        x=1/x;
        n= -n
    }
    if(n%2===0){
        const half = myPow(x,n/2);
        return half*half;
    }
    else{
        return x*myPow(x,n-1)
    }
}

let x = 5, n = 2;
console.log(myPow(x, n)); // 16

/**
 *     Initial Call: myPow(5, 2)
        n is not 0.
        n is positive (n > 0), so we proceed to the if condition where n % 2 === 0 is checked.

    Check if n is even:
        n = 2, which is even (n % 2 === 0 is true).
        Calculate half = myPow(5, 1) (because n / 2 = 1).

    Recursive Call: myPow(5, 1)
        n is not 0.
        n is positive, so we proceed to the if condition where n % 2 === 0 is checked.

    Check if n is even:
        n = 1, which is odd (n % 2 === 0 is false).
        Calculate return 5 * myPow(5, 0).

    Recursive Call: myPow(5, 0)
        n is 0.
        Directly returns -1 (according to the code, though logically should return 1 for n = 0).

    Backtracking:
        myPow(5, 0) returns -1.
        myPow(5, 1) returns 5 * (-1) = -5.

    Backtracking:
        myPow(5, 2) continues with half = -5.
        Returns (-5) * (-5) = 25.

Thus, myPow(5, 2) should return 25.
 */