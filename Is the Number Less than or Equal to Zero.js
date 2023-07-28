// Is the Number Less than or Equal to Zero

//first way if and else

let check = function(a){
    if(a<=0){
    console.log("true")
}
return "false";

}

console.log(check(5));

// with arrow if and else

let check = a=> (a<=0)?"true":"false";

console.log(check(5));