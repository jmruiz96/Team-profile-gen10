class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        // caught this "is" typo that was causing failed test
        this.email = email;
    }
    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return 'Employee'
    }
}

module.exports = Employee;