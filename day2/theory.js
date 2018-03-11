//tenery operator
debugger
const x = 10
let multix = x => x + x
let minx = function (x) {
    return x - 2;
}

//multixกับminxเป็นfunctionเหมือนกันดขียนได้สองแบบ
console.log(multix(x));
console.log(minx(x));

// ----------------------
const y = 20;

let answer;
if (y > 10) {
    answer = 10;
} else {
    answer = y;
}

let ans = y > 10 ? 10 : y

//เขียนได้เหมือนกัน
//---------------------------

//shot curcuit
// let variable1 = 5
// let variable2 = variable1 || 'new';
// console.log(variable2); //variabl2=5

// let variable3 , variable4
// variable4 = variable3 || 'new';
// console.log(variable3);

//---------------------------


let variable1;
let variable2 = variable1 || '';
console.log(variable2 === ''); // prints true
variable1 = 'foo';
variable2 = variable1 || '';
console.log(variable2); // prints foo


//Declaring Variables Shorthand
let xx = 123,
    yy = "I'm strin",
    zz = [1,2,3];

// ---------------------


