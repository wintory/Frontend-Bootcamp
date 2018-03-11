//functional programming
let num = [1,2,2,5,7,8]

let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
//array.map

let thismap = num.map(num=>{
    return num*2
})
console.log(thismap);



//arr.filter
let filt = num.filter(num=>{
    return num>5
})

let filword = words.filter(words=>{
    return words.length > 5
})

console.log(filt);
console.log(filword);

//arr.reduce

const result = num.reduce((sum,num) => {
    return sum+num
  }, 0)
  console.log(result) // 100

  
