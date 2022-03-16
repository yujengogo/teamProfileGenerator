const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const generateHTML = require('./src/generateHTML')
const fs = require('fs')
const myEmployees = [];


// ENTER USER INFORMATION (Manager)
// inquirer.prompt

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name again!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your id?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter your id again!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email again!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is office number?',
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log('Please enter your office number again!');
                    return false;
                }
            }
        },
    ])
        .then(answers => {
            console.log(answers);
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            myEmployees.push(manager);
            promptMenu();
        })
};
const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'please select from below options:',
            choices: [
                "add an Engineer.",
                "add an Intern.",
                "complete team."
            ]
        }])
        .then(userChoice => {
            switch (userChoice.menu) {
                case "add an Engineer.":
                    promptEngineer();
                    break;
                case "add an Intern.":
                    promptIntern();
                    break;
                default:
                    BuildTeam();
            }
        }
        )
};
const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your Engineer name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your Engineer name again!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your Engineer id?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter your Engineer id again!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your Engineer email address?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your Engineer email again!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is Engineer github?',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your Engineer github again!');
                    return false;
                }
            }
        },
    ])
        .then(answers => {
            console.log(answers);
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            myEmployees.push(engineer);
            promptMenu();
        })
};
const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your intern name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your intern name again!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your intern id?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter your intern id again!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your intern email address?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your intern email again!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is your intern school?',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Please enter your intern school again!');
                    return false;
                }
            }
        },
    ])
        .then(answers => {
            console.log(answers);
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            myEmployees.push(intern);
            promptMenu();
        })
};
const BuildTeam = () =>{
    console.log(`teambuild complete!!!`);
    const teamHTML = generateHTML(myEmployees)
    fs.writeFile("./dist/output.html", teamHTML, ()=> {
        console.log("file has veen successfully created!!!")
    })
}
promptManager();



// Function for adding an intern
// -> get infromation about the intern first (inquirer.prompt)
// -> create a new Intern using your Intern class
// -> add the intern to your myEmployees array
// -> go back to the initial prompt (what would you like to do?)

// Function for adding an Engineer
// -> get infromation about the engineer first (inquirer.prompt)
// -> create a new Engineer using your Engineer class
// -> add the engineer to your myEmployees array
// -> go back to the initial prompt (what would you like to do?)

// function for finishing the apllication
// generate an HTML using template
// wrtte the HTML file using the template output