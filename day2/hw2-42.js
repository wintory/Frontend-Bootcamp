let Employee = require('./hw2-41')

class CEO extends Employee {
    constructor(firstname, lastname, salary) {
        super(firstname, lastname, salary);
        this.dressCode = 'suit';
    }


    getSalary(){  // simulate public method
        return super.getSalary()*2;
    };

    work (employee) {  // simulate public method
        this._fire(employee);
        this._hire(employee);
        this._seminar();
        this._golf();
    }


    increaseSalary(employee, newSalary) {
        employee = employee.setSalary(newSalary)
    }

    _golf () { // simulate private method
        this.dressCode = 'golf_dress';
        console.log("He goes to golf club to find a new connection." + " Dress with :" + this.dressCode);
        
    };

    _fire(employee){
        this.dressCode = 'tshirt'
        console.log("Somsri has been hired back! Dress with : "+ this.dressCode);
        
    }

    _hire(employee){
        this.dressCode = 'golf_dress'
        console.log("SHe goes to golf club to find a new connection. Dress with : "+ this.dressCode);
        
    }

    _seminar(){
        this.dressCode = 'suit'
        console.log("He is going to seminar Dress with : "+ this.dressCode);
    }

    _golf(){
        this.dressCode = 'suit'
        console.log("He goes to golf club to find a new connection. Dress with :"+ this.dressCode);   
    }



    gossip(name,quote){
        console.log(name.getFirstname()+" "+quote);
    }
}
module.exports = CEO
