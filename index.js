const inquirer = require('inquirer');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const fs = require('fs');

function Team() {
    this.managers = [];
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

new Team().addTeam();
