const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer.js')
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js')
var employees = [];

const init = () => {
    inquirer
        .prompt([{
            type: "list",
            message: "What is you position?",
            name: "position",
            choices: ['Intern', 'Engineer', 'Manager']
        } 
        ])
        .then((ans) => {
            if (ans.position === "Manager"){
                managerInq()
            } else {
                console.log("This application starts with the team Manager.");
                process.exit();
            }
        })
}
const managerInq = () => { 
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is your name?",
                name: "name",
                validate: (input) => input ? true : console.log("Please enter your name.")
            },
            {
                type: "input",
                message: "What is your ID?",
                name: "id",
                validate: (input) => {
                    if (!isNaN(input)) {
                        input = input;
                        return true
                    } else {
                        console.log("Input must be a number.");
                        return false
                    }
                }
            },
            {
                type: "input",
                message: "What is your email address?",
                name: "email",
                validate: (input) => {
                    if (input.includes("@", ".")) {
                        return true
                    } else {
                        console.log("Input must be a valid email address.");
                        return false
                    }
                }
            },
            {
                type: "input",
                message: "What is your office number?",
                name: "officeNumber",
                validate: (input) => {
                    if (!isNaN(input)) {
                        return true
                    } else {
                        console.log("Input must be a number.");
                        return false
                    }
                }
            },
        ])
        .then((ans) => {
            managerDetails(ans);
            newEmployeeInq();
        })
}

const engineerInq = () => { 
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is your Engineer's name?",
                name: "name",
                validate: (input) => input ? true : console.log("Please enter their name.")
            },
            {
                type: "input",
                message: "What is your Engineer's ID number?",
                name: "id",
                validate: (input) => {
                    if (!isNaN(input)) {
                        input = input;
                        return true
                    } else {
                        console.log("Input must be a number");
                        return false
                    }
                }
            },
            {
                type: "input",
                message: "What is your Engineer's email address?",
                name: "email",
                validate: (input) => {
                    if (input.includes("@", ".")) {
                        return true
                    } else {
                        console.log("Input must be a valid email address");
                        return false
                    }
                }
            },
            {
                type: "input",
                message: "What is your Engineer's GitHub username?",
                name: "github",
                validate: (input) => input ? true : console.log("Please enter their username.")
            },
        ])
        .then((ans) => {
            engineerDetails(ans);
            newEmployeeInq();
        })
}

const internInq = () => { 
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is your Intern's name?",
                name: "name",
                validate: (input) => input ? true : console.log("Please enter their name.")
            },
            {
                type: "input",
                message: "What is your intern's ID number?",
                name: "id",
                validate: (input) => {
                    if (!isNaN(input)) {
                        input = input;
                        return true
                    } else {
                        console.log("Input must be a number.");
                        return false
                    }
                }
            },
            {
                type: "input",
                message: "What is your intern's email address?",
                name: "email",
                validate: (input) => {
                    if (input.includes(".", "@")) {
                        return true
                    } else {
                        console.log("Input must be a valid email address.");
                        return false
                    }
                }
            },
            {
                type: "input",
                message: "What school did/does your intern attend?",
                name: "school",
                validate: (input) => input ? true : console.log("Please enter a school.")

            },
        ])
        .then((ans) => {
            internDetails(ans);
            newEmployeeInq();
        })
}
const managerDetails = (ans) => {
    let { name, id, email, officeNumber } = ans;
    let manager = new Manager(name, +id, email, +officeNumber); 
    employees.push(manager);}

const engineerDetails = (ans) => {
    let { name, id, email, github } = ans;
    let engineer = new Engineer(name, +id, email, github);
    employees.push(engineer); 
}

const internDetails = (ans) => { 
    let { name, id, email, school } = ans;
    let intern = new Intern(name, +id, email, school);
    employees.push(intern); 
}

const newEmployeeInq = () => { 
    inquirer
        .prompt([
            {
                type: "list",
                message: "Would you like to add an employee?",
                name: "newEmployee",
                choices: ["Engineer", "Intern", "That's all"],
            }
        ]).then((ans) => {
            switch (ans.newEmployee) {
                case "That's all":
                    fs.writeFile("./dist/index.html", renderHtml(), ((err) => err ? console.error(err) : console.log("Successfully created Html")));
                    break;
                case "Engineer":
                    engineerInq()
                    break;
                case "Intern":
                    internInq()
                    break;
            }
        })
}

const renderHtml = () => {
    let html = "";
    for (let employee of employees) {
        html += employee.renderCard()
    }
    html += `
    </div>
</body>
</html>`
    return html;
}


init()
