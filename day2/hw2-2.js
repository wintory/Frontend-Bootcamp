
let fetch = require('node-fetch'),peopleSalary


//fetch('http://127.0.0.1:49700/day2/json1.html').then(async response => {

  //response.json().then(peopleSalary=>{
  //  console.log(peopleSalary);
  //    let peopleLowSalary = peopleSalary.filter(getlow).map(uppersalary)
  //  console.log("lowersalary*2 = "+peopleLowSalary);
  //})
 // let peopleSalary = await response.json();
  //let peopleLowSalary = peopleSalary.filter(getlow).map(uppersalary)
  //console.log("lowersalary*2 = "+peopleLowSalary);
//}).catch(error => {
  //console.error('Error:', error);
//});

//self invoking
! async function(){
  console.log("Pass");
  
  //let response = await fetch('http://127.0.0.1:49700/day2/json1.html');
  //let peopleSalary = await response.json();
  let peopleSalary = await (await fetch('http://127.0.0.1:49700/day2/json1.html')).json();
  let peopleLowSalary = peopleSalary.filter(getlow).map(uppersalary)
  console.log("lowersalary*2 = "+peopleLowSalary);
let peopleHighSalary = peopleSalary.filter(gethigh).map(re=>re.salary)
let getAll = peopleHighSalary.concat(peopleLowSalary)
let sumSalary = getAll.reduce(getsum)
console.log("sumSalary = "+sumSalary);

}();

(function(){
  console.log("Pass also");
  
})();

let sumsalary = null

let getlow = peopleSalary=>{
  return peopleSalary.salary<100000
}

let uppersalary = getlow=>{
  return getlow.salary*2
}


let gethigh = peopleSalary=>{
  return peopleSalary.salary>=100000
}

let getsum = (sum,inp)=>{
  return sum+inp
}



