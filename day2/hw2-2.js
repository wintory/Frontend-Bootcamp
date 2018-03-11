
let fetch = require('node-fetch')

let kk = fetch('http://127.0.0.1:56775/json1.html').then(response => {
  return response.json();
})
.then(peopleSalary => {
  

  let sumsalary = null

  let getlow = peopleSalary=>{
    return peopleSalary.salary<100000
  }
  
  let uppersalary = getlow=>{
    return getlow.salary*2
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
  


})
.catch(error => {
  console.error('Error:', error);
});
