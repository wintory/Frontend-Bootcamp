
class Employee {
    constructor(firstname, lastname, salary) {
        this._firstname = firstname
        this._lastname = lastname
        this._salary = salary; // simulate private variable

    }
    setSalary(newSalary) { // simulate public method
        // return newSalary ถ้ามีเงินเดือนใหม่มีค่ามากกว่า this._salary
        // return false ถ้าเงินเดือนใหม่มีค่าน้อยกว่าเท่ากับ this._salary

        if(newSalary>=this.getSalary()){
            console.log('Somsris salary has been set to '+newSalary);
            return newSalary
            
        }else{
            console.log('Somsri salary is less than before!!');
            return false
            
        }
        
    }
    getSalary () {  // simulate public method
        return this._salary;
    };
    getFirstname () {  // simulate public method
        return this._firstname;
    };
    work(employee) {
        this._fire(employee);
        this._hire(employee);
        this._seminar();
        this._golf();
    }
    leaveForVacation(year, month, day) {

    }
}

module.exports= Employee