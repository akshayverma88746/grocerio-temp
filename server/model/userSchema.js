const mongoose = require("mongoose");

const newSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true,
    },
    password : {
        type : String,
        require : true
    },
    token : {
        type : String
    }

});


const EmployeeModel = mongoose.model("employees", newSchema)
module.exports = EmployeeModel