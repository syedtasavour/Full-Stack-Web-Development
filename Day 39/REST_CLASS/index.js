const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
app.set("views engine","ejs");
app.use(express.urlencoded({extended:true}))
app.set("views",path.join(__dirname,"views"));
app.set(express.static(path.join(__dirname,"public")));


app.get("/",(req,res)=>{
    res.send("Server Working Well");
})

app.listen(port,()=>{
    console.log("Listening To port: ",port);
});