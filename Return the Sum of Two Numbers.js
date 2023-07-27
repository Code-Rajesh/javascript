// Return the Sum of Two Numbers
// first way
function sum(a,b){
    return a+b;
}

console.log(sum(5,9));

//second way

let sum = function(a,b){
    return a+b;
}

console.log(sum(5,8));

//third way

let sum = (a,b)=>a+b;
console.log('sum of two number is =',sum(78,85));