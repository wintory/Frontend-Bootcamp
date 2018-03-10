let peopleSalary = require('./hw1.json')

function deleteCompany(prop){
    let newProp = []
    for(let i in prop){
        let obj = {}
        let key = Object.keys(prop[i])
        let value = Object.values(prop[i])
        for(let k in key){
            if(key[k] != "company"){
                let index = key[k]
                let val = value[k]
                obj[index] = val
            }
        }
        newProp.push(obj)
    }
    return newProp
}

let newPeopleSaraly = deleteCompany(peopleSalary)


function updateSalary(newprop){

    for(let i in newprop){
        let salary = newprop[i].salary
        let new10 = salary*(10/100)+salary
        let new20 = new10*(20/100)+new10
        let value = newprop[i].salary = [salary,new10,new20]
    }
    return newprop
}


console.log(updateSalary(newPeopleSaraly));
