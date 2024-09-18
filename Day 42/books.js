const mongoose = require('mongoose');

main().then(res => console.log("Connection Successfull")).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}
const bookSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true,
    },
    author: {
        type:String
    },
    price:{
        type:Number
    }
});
const book = mongoose.model("Book",bookSchema);
let book1 = new book ({
    title: "Book One Test",
    author: "author 1",
    price: 1200
});




let book2 = new book ({
    
    author: "author 2",
    price: 2200
});
book2.save().then(res => console.log("Job Done",res)).catch(err => console.log("Job error",err));