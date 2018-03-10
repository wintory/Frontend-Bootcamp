//basic js
/*
let a = {'animal' : 'bat'}
const pi = 3.14
let b = Object.assign({},a) //ต้องassing เพราะมันดูจากpointerถ้าแก้bจะแก้aด้วย
b.animal = 'dog'
console.log(b)
console.log(a)

let retur = function(inp){
    console.log(inp)
    return inp
}

retur("aaa")

let num1 = 1 , num2 = '2'

let checknum = function(number1,number2){
    if(number1==number2){
       console.log("true")
    }
}

checknum(num1,num2)
*/

//json

const students = [
    {"firstname":"Somchai","lastname":"SudLor","age":"50"},
    {"firstname":"Somsri","lastname":"SudSuay","age":"40"},
    {"firstname":"Luke","lastname":"Skywalker","age":"60"}
  ]

 console.log(students)
 console.log("/////////////////////")
 console.log(students[0].firstname)
 console.log("/////////////////////")
 console.log(students[2].age)
 console.log("/////////////////////")
 let strjson = JSON.stringify(students)
 console.log(strjson)
 console.log("/////////////////////");
 console.log(JSON.parse(strjson));
 
 

 
 
