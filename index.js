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
                managerPrompt()
            } else {
                console.log("This application starts with the team Manager.");
                process.exit();
            }
        })
}
const managerPrompt = () => { 
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
                 //matt showed me this, apperently there is a weird glitch with the number input 
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
            newEmployeePrompt();
        })
}

const engineerPrompt = () => { 
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
            newEmployeePrompt();
        })
}

const internPrompt = () => { 
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
            newEmployeePrompt();
        })
}
const managerDetails = (ans) => {
    let { name, id, email, officeNumber } = ans;
    let manager = new Manager(name, +id, email, +officeNumber); 
    employees.push(manager);}
    //push is the right method to get those new guys inthere.

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

const newEmployeePrompt = () => { 
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
                    engineerPrompt()
                    break;
                case "Intern":
                    internPrompt()
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
//this is what is the endcap of the html and that div closes the row section allowing the cards to be flexed.
    return html;
}


init()
