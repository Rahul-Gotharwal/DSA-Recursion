// 1. -------- Printing the name n times--------------//
// var printingName = function(i , n){
// if(i>n){
//     return
// }
// console.log('raj');
// printingName(i+1 , n)
// }
// printingName(1 , 3)


// //------------2 . Print linearly from 1 to N -----------------//
// function PrintingNumber( i , n ){
//     if(i>n){
//         return
//     }
//     console.log(i)
//  PrintingNumber(i+1 , n)
// }
// PrintingNumber(1,10)


//-----------------3 Printing N to 1 (changing the perameter , condditions same) -----------------//
// printingNumberNTo1 = (n, i) =>{
// if(i>n){
//     return
// }
// console.log(n)
// printingNumberNTo1(n-1,i)
// }
// printingNumberNTo1(10,1)

//-----------------perametrs same but the condition change-------------//
// printingNumberNTo1 = (i, n) =>{
// if(i>n){
//     return
// }
// console.log(n)
// printingNumberNTo1(i, n-1)
// }
// printingNumberNTo1(1,10)
//-----------------striver's expmale-----------------//
// i ko km krte jao kyuki i k kam hone per hi condion true hogi or t eturn hoga like (2,3)  then (1,3) calls
//  printingNumberNTo1 = (i, n) =>{
// if(i<1){
//     return
// }
// console.log(i)
// printingNumberNTo1(i-1, n)
// }
// printingNumberNTo1( 3,3)
//


//------------printing from 1 to N but by backtrack -------------------//
//  function printBacktrack( i , n){
//     if(i<1){
//         return 
//     }
//     printBacktrack(i-1, n)
//     console.log(i)
//  }

// printBacktrack(3,3);

//------------------printing dron N to 1 Uisng backtrack----------------//
function printBacktrack(i, n) {
    if (i < 1) {
        return;
    }
    console.log(i); 
    printBacktrack(i - 1, n);
    
}

printBacktrack(3, 3); // This will print 3, 2, 1
