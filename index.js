const inquirer = require('inquirer');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const fs = require('fs');

function Team() {
    this.managers = [];
    this.engineers = [];
    this.interns = [];
};

Team.prototype.addTeam = function() {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Enter employee name',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Enter the Employee Name");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter employee name',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Enter the Employee ID");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter employee email',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Enter the Employee Email Address");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: 'Enter employee office number',
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log("Enter the Employee office number");
                    return false;
                }
            }
        }
    ])
    .then(({ name, id, email, office }) => {
        this.managers = new Manager(name, id, email, office);
        console.log(this.managers);
    });
};
// Add Employee
Team.prototype.addEmployee = function() {
    inquirer.prompt(
        {
            type: 'checkbox',
            name: 'add',
            message: 'Choose your employee',
            choices: ['Engineer', 'Intern', 'Quit'],
            validate: addInput => {
                if (addInput) {
                    return true;
                } else {
                    console.log('Make a selection fool!');
                    return false;
                }
            }
        }
    )
    .then(({ add }) => {
        if (add[0] === 'Engineer') {
            this.addEngineer();
        } else if (add[0] === 'Intern') {
            console.log('Intern');
        } else {
            console.log('Quit');
        }
    });
};
// Engineer Object
Team.prototype.addEngineer = function() {

    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Enter employee name',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter employee name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'Enter the employee ID',
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log('Please enter employee ID!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter employee email address',
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('Please enter employee email address!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: 'Enter employee github username',
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log('Please enter a github username')
                        return false;
                    }
                }
            }
        ])
        .then(({ name, id, email, github }) => {
            this.engineers.push(new Engineer(name, id, email, github));
            console.log(this);
            this.addEmployee();
        });
};



new Team().addTeam();
