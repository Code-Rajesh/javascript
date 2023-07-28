// Return the First Element in an Array

//first way

let firstarray = [1,2,3,5,'raj','rahul'];

let arrayretrun = a=>firstarray[a];

console.log("retrun first element of array is =",firstarray[1]);

//second way
 
let newarr =[1,2,3,4];
function getFirstValue(arr) {
	return newarr[arr];
}

console.log(getFirstValue(1));

//third way

let arrayretrun = a=>a[0];

let newarr=arrayretrun([1,2,3,4]);

console.log(newarr);
