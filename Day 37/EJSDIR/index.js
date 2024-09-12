const express = require("express");
const app = express();
const path = require("path");
const port = 8080;
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
    res.render("home");
})
app.get("/about",(req,res)=>{
    res.send("about");
})


app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});