let num1 = 1
let num2 = "2"


let test = function(){
    return 1
}

console.log(func1(num1,num2));

console.log(rtrcall(test));


function func1(inp1 , inp2){
    return inp1+inp2
}

function rtrcall(callbackFunction){
    return callbackFunction()
}


