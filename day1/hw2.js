let peopleSalary = require('./hw1.json')

function deleteCompany(prop){
    let newProp = []
    for(let i in prop){
    //     let obj = {}
    //     let key = Object.keys(prop[i])
    //     let value = Object.values(prop[i])
        for(let k in prop[i]){
            // if(key[k] != "company"){
            //     let index = key[k]
            //     let val = value[k]
            //     obj[index] = val
            // }
            if(k=="company"){
                delete prop[i][k]
            }
        }
    }
        // newProp.push(obj)
        return prop
    }
    

console.log(deleteCompany(peopleSalary));

