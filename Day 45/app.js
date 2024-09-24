const express = require('express');
const path = require('path');
const app = express();
const ExpressError = require('./ExpressError');

const checkToken = (req,res,next)=>{
let {token} = req.query;
if(token === 'giveaccess'){
    next();
}throw new ExpressError(401,"Access Denied")
};

app.get('/api',checkToken,(req,res)=>{
    res.send("data");
});

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define a simple route
app.get('/', (req, res) => {
    res.send("Home Page");
});
app.get("/err",(req,res)=>{
    abcx = abcde;
})
app.use((err, req, res, next) => {
    let {status=500,message="----- Error ------"} = err;
    console.log("----- Error ------");
    res.status(status).send(message);
});

app.use((req, res) => {
   
    res.send("Page Not Found");
});

// Start the server
app.listen(8080, () => {
    console.log(`Server is running on port`);
});