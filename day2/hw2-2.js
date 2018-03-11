


let peopleSalary = require('../day1/hw1.json')
let sumsalary = null

let getlow = peopleSalary=>{
  return peopleSalary.salary<100000
}

let uppersalary = getlow=>{
  return getlow.salary*getlow.salary
}

let peopleLowSalary = peopleSalary.filter(getlow).map(uppersalary)
console.log("lowersalary*2 = "+peopleLowSalary);


let gethigh = peopleSalary=>{
  return peopleSalary.salary>=100000
}

let getsum = (sum,inp)=>{
  return sum+inp
}

let peopleHighSalary = peopleSalary.filter(gethigh).map(re=>re.salary)

let getAll = peopleHighSalary.concat(peopleLowSalary)

let sumSalary = getAll.reduce(getsum)

console.log("sumSalary = "+sumSalary);
