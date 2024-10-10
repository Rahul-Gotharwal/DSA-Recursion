//->https://www.youtube.com/watch?v=7UBEku3y2Ig

// function findFirstOccurrence(haystack, needle) {
//     if (needle === "") return 0; // If needle is empty, return 0 as per problem constraints
//     if (haystack.length < needle.length) return -1; // If needle is longer than haystack, return -1

//     for (let i = 0; i <= haystack.length - needle.length; i++) {
//         let j;
//         for (j = 0; j < needle.length; j++) {
//             if (haystack[i + j] !== needle[j]) break; // Compare characters of haystack and needle
//         }
//         if (j === needle.length) return i; // If full needle is found in haystack, return starting index
//     }

//     return -1; // If needle is not found, return -1
// }

// // Example usage:
// const haystack = "sadbuttrue";
// const needle = "but";
// console.log(findFirstOccurrence(haystack, needle)); // Output: 3

//------------appraoh -2-----------------//
var strStr = function (haystack, needle) {
    if (haystack.length < needle.length) {
        return -1;
    }
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        if (haystack.substring(i, i + needle.length) === needle) {
            return i;
        }
    }
    return -1;
};

const haystack = "sadbuttrue";
const needle = "but";
console.log(strStr(haystack, needle)); // Output: 3