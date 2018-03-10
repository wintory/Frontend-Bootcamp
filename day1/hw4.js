let people = require('./hw4json.json'),result=[]

function checkColor(){
    let allColor = []
    let color = {}
    let colorName = []
    for(let i in people){
        let cl = people[i].eyeColor
        colorName.push(cl)
    }
    newColorName =Array.from(new Set(colorName))
    
    for(k in newColorName){
        allColor.push({"name":newColorName[k],"count":0})
    }

    for(j in people){
        for(l in newColorName){
            if(people[j].eyeColor == newColorName[l]){
                allColor[l].count++
            }
        }
    }
    
    console.log(allColor);
}


function checkGender(){
    let allGender = []
    let gender = {}
    let genderName = []
    for(let i in people){
        let cl = people[i].gender
        genderName.push(cl)
    }
    newGenderName =Array.from(new Set(genderName))
    
    for(k in newGenderName){
        allGender.push({"name":newGenderName[k],"count":0})
    }

    for(j in people){
        for(l in newGenderName){
            if(people[j].gender == newGenderName[l]){
                allGender[l].count++
            }
        }
    }
    
    console.log(allGender);
}

function checkFriend(){
   for(i in people){
    let friend = people[i].friends
    people[i].friendCount = 0
    for(k in friend){        
        people[i].friendCount++
        console.log(people[i]);
}

}

}
checkColor(people)
checkGender(people)
// checkFriend()