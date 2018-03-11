let arr = [1,2,3,4,5,6,7,8,9,10]
let checkmod = arr=>{
     return arr%2 ==0
}

let multi = check=>{
    return check*1000
}

let result = arr.filter(checkmod).map(multi)

console.log(result);

