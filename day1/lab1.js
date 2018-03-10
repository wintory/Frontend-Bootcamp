let num1 = 1
let num2 = "2"

func1(num1,num2)
rtrcall(func1(num1,num2))
function func1(inp1 , inp2){
    return inp+inp2
}

function rtrcall(callbackfunction){
    return callbackfunction()
}