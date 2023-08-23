const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('./db/config');

const EmployeeModel = require('./model/userSchema');
const port = 3001;

app.use(express.json())

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());


app.use(require('./route/router'))


app.listen(port, () =>{
    console.log(`server is running at port ${port}`);
})