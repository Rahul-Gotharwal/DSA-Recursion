//-------------print all the subsecquence-----------------//
// function printSubsequences(arr){
//    function generateSubsequences(index , subseq){
//      // Base case: If the index is equal to the array length, print the subsequence
//      if(index === arr.length){
//         console.log(subseq);
//         return
//      }
//      // Case 1: Include the current element
//      subseq.push(arr[index]);
//      generateSubsequences(index+1  ,subseq)
//      subseq.pop(); // Backtrack to remove the last element
//      generateSubsequences(index+1 , subseq);
//    }
//    generateSubsequences(0 , []);
// }
// const array = [3, 1, 2];
// printSubsequences(array);

//---------------print all the subsecquence using only a single  function (peramterized recursion) ---------------//
// function printSubsequences(arr , res , index){
//     if(index === arr.length){
//         console.log(res)
//         return
//     }
//    res.push(arr[index])
//    printSubsequences(arr ,res , index+1);
//    res.pop();
//    printSubsequences(arr , res, index+1)
// }
// const arr = [3,1,2]
// const res = []
// let index = 0
// printSubsequences(arr ,res ,index);

//------------using the functional recursion -----------------//
function printSubsequences(arr, index = 0, current = []) {
  if (index === arr.length) {
    console.log(current);
    return;
  }
  // Include the current element in the subsequence
  printSubsequences(arr, index + 1, [...current, arr[index]]);
  // uper wala call hmesha ek new array create krke valye dalta rhega jab tk ki condition false nhi ho jati
  // Exclude the current element from the subsequence
  printSubsequences(arr, index + 1, current);
}
// Example usage:
const arr = [3, 1, 2];
printSubsequences(arr);

/**
 * Dry Run Explanation:
Initial Setup:

arr = [3, 1, 2]
index = 0
current = []
First Call to printSubsequences(arr, 0, []):

Case 1 (Include arr[0] = 3):

index = 1, current = [3]
Recursive call: printSubsequences(arr, 1, [3])
Case 2 (Exclude arr[0] = 3):

index = 1, current = []
Recursive call: printSubsequences(arr, 1, [])
Second Call printSubsequences(arr, 1, [3]):

Case 1 (Include arr[1] = 1):

index = 2, current = [3, 1]
Recursive call: printSubsequences(arr, 2, [3, 1])
Case 2 (Exclude arr[1] = 1):

index = 2, current = [3]
Recursive call: printSubsequences(arr, 2, [3])
Third Call printSubsequences(arr, 2, [3, 1]):

Base Case (index === arr.length):
Print [3, 1] because current.length > 0.
Fourth Call printSubsequences(arr, 2, [3]):

Base Case (index === arr.length):
Print [3] because current.length > 0.
Backtracking:

After each recursive call completes, there is no need to backtrack using pop() because each recursive call creates a new array ([...current, arr[index]]) specific to that call. This new array captures the current state of the subsequence, and changes in subsequent recursive calls do not affect previous arrays.
 */

/**
                                    []
                         /                       \
                   [3]                             []
               /         \                    /            \
          [3, 1]         [3]              [1]             []
         /      \       /     \         /     \        /       \
   [3, 1, 2]  [3, 1]  [3, 2]  [3]    [1, 2]  [1]    [2]       []
      /              \                      /        \       /     \
[3, 1, 2]           [3, 1]               [1, 2]   [1]   [2]      []
   /
[3, 1, 2]


 */

//----------------diffrence berween perametized and functioanl recursion------//
/**
 * Parameterized Recursion:

Definition: Parameterized recursion refers to a recursive function that explicitly passes and utilizes additional parameters (beyond the recursive base case and step) to maintain and manage state across recursive calls.
Usage: It often involves passing parameters like arrays, counters, or other data structures to keep track of the current state or context of the computation.
Example: Your previous example with printSubsequences(arr, res, index) is an example of parameterized recursion, where res is used to store the current subsequence being constructed.
Functional Recursion:

Definition: Functional recursion involves utilizing functional programming principles, such as immutability and higher-order functions, to manage state implicitly without modifying shared variables. It typically avoids passing mutable state as parameters.
Usage: Instead of modifying state directly, functional recursion creates new state (often using techniques like recursion with spread syntax or object immutability) and passes it recursively.
Example: The functional recursion example you previously asked about uses spread syntax [...current, arr[index]] to create new arrays for each recursive call, thus avoiding the need for pop() or direct state modification.
Key Differences:

State Management: Parameterized recursion explicitly passes and modifies parameters (like arrays or counters) to manage state. Functional recursion manages state implicitly by creating new state with each recursive call.
Immutability: Functional recursion often emphasizes immutability, where each recursive call creates new data structures or state, preserving the integrity of existing data without direct modification.
Use Cases: Parameterized recursion is straightforward for managing mutable state or maintaining complex state structures. Functional recursion is useful for maintaining clarity, reducing side effects, and leveraging functional programming principles.
In practice, understanding these differences helps in choosing the appropriate approach based on the problem requirements, coding style preferences, and performance considerations.
 */

