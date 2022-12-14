const Employee = require('./Employee.js')
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return "Intern";
    }
    renderCard(){
        return `
        <div class="col d-flex justify-content-center">
    <div class="card" style="width: 18rem;">
            <div class="card-header bg-primary">
            <h5 class="card-title">${this.name}</h5>
            <h6 class="card-subtitle mb-2">${this.getRole()}</h6>
            </div>
            <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"> ID:${this.id}</li>
                            <li class="list-group-item">Email:<a href="mailto:${this.email}">${this.email}</a></li>
                            <li class="list-group-item">School Attended: ${this.school} </li>
                        </ul>
        </div>
    </div>
    </div>
    `
    }
}
module.exports = Intern