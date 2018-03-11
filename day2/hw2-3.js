// let people = require('./hw4.json')


let fetch = require('node-fetch')
fetch('http://127.0.0.1:56775/hw4.html').then(response => {
   return response.json();
 })
 .then(myJson => {
   people = myJson

let getMen = people=>{
    return people.gender == "male"
}

let getfriend = people=>{
    return people.friends.length >=2
}

let setfield = arr=>{
    return [arr.name, arr.gender, arr.company, arr.email, arr.friends, arr.balance]
}

let setbalance = balance=>{
    let sett ={
        "name" :balance[0],
        "gender" : balance[1],
        "company" : balance[2],
        "email" : balance[3],
        "friends" : balance[4],
        "balance" : "$"+parseFloat(balance[5].replace("$","").replace(",","")/10)
    }
    return sett
}

let re = people.filter(getMen).filter(getfriend).map(setfield).map(setbalance)
 console.log(re);
 })
 .catch(error => {
   console.error('Error:', error);
 });


 
 

