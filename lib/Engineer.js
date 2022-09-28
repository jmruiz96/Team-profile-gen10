const Employee = require("./Employee.js");

class Engineer extends Employee{
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github =github;
    }
    getGithub(){
        return this.github
    }
    getRole(){
        return 'Engineer'
    }
renderCard(){
    return `
    <div class="col d-flex justify-content-center">
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${this.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${this.getRole()}</h6>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"> ID:${this.id}</li>
                            <li class="list-group-item">Email:<a href="mailto:${this.email}">${this.email}</a></li>
                            <li class="list-group-item">Github: <a href="https://www.github.com/${this.github}" target="_blank">${this.github}</a></li>
                        </ul>
        </div>
    </div>
    </div>
    `
}
}
module.exports = Engineer