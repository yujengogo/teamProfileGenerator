const inquirer = require("inquirer");
function changeRole(employee) {
    switch (employee.getRole()) {
        case "Manager":
            return  `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                    <h5 class="card-title">${employee.name}</h5>
                    <p class="card-text">Manager</p>
                    </div>
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID = ${employee.id}</li>
                    <li class="list-group-item">Email = ${employee.email}</li>
                    <li class="list-group-item">Office Number = ${employee.officeNumber}</li>
                    </ul>
                </div>`
        case "Engineer":
            return `
                <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${employee.name}</h5>
              <p class="card-text">Emgineer</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID = ${employee.id}</li>
              <li class="list-group-item">Email = ${employee.email}</li>
              <li class="list-group-item">Github = ${employee.github}</li>
            </ul>
          </div>`
        case "Intern":
            return `
                <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${employee.name}</h5>
                  <p class="card-text">Intern</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID = ${employee.id}</li>
                  <li class="list-group-item">Email = ${employee.email}</li>
                  <li class="list-group-item">School = ${employee.school}</li>
                </ul>
              </div>`

    }
}
const generateHTML = (myEmployees) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
        <body>
            <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Let's Get Your Team Register!</h1>
            </div>
            </div>
      
            <div class="container">
                ${
                    myEmployees.map((employee) => {
                        return changeRole(employee)
                    })
                }
            </div>
                <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>
        </body>
    </html>
    `



}
module.exports = generateHTML;