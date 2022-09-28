const Employee = require("./Employee.js")
class Manager extends Employee {
    constructor(name, id, email, officeNumber){
    super(name, id, email)
    this.officeNumber = officeNumber;
    }
    getOfficeNumber(){
        return this.officeNumber
    }
    getRole(){
        return Manager
    }
    renderCard(){
        `
<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
            <title>Our Team</title>
        </head>
        <body>
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <h1> Your Team </h1>
            </div>
        </nav>
        <div class="row mx-5">
        <div class="col d-flex justify-content-center">
        <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${this.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${this.getRole()}</h6>
                <div class="card" style="width: 18rem;">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"> ID:${this.id}</li>
                            <li class="list-group-item">Email:<a href="mailto:${this.email}">${this.email}</a></li>
                            <li class="list-group-item">Office Number:${this.officeNumber} </li>
                        </ul>
                    </div>
        </div>
    </div>
        </div>

                
        </body>
    </html>
        `
    }
}
module.exports = Manager