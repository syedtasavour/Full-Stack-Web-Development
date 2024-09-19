const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const MONGO_URL = "mongodb://127.0.0.1:27017/stayfinder";

// Set up view engine and static files
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


// Connect to MongoDB
async function connectToDatabase() {
    await mongoose.connect(MONGO_URL);
}
connectToDatabase().then(() => console.log('Connected to DB!')).catch((error) => {
    console.log(error);
});


app.get('/', (req, res) => {
    res.send('work');
});



// Start the server
app.listen('8080', () => {
    console.log('Server is listening on port 8080');
});
 