const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Chat = require('./models/chat.js');
const methodOverride = require('method-override');

// Set up view engine and static files
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// Connect to MongoDB
async function connectToDatabase() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
connectToDatabase().then(() => console.log('Connected to MongoDB!')).catch((error) => {
    console.log(error);
});

// Route to display all chats
app.get('/chats', async (req, res) => {
    let sc = await Chat.find();
    res.render('chats', { sc });
});

// Route to display form for new chat
app.get('/newchat', (req, res) => {
    res.render('newchat');
});

// Route to create a new chat
app.post("/sendChat", (req, res) => {
    let { from, to, msg } = req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date(),
    });
    newChat.save().then(() => res.redirect('/chats')).catch((error) => {
        console.log(error);
    });
});

// Route to display form to edit a chat
app.get('/chats/:id/edit', async (req, res) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render('edit', { chat });
});

// Route to update a chat message
app.put('/edit-message/:id', async (req, res) => {
    let { id } = req.params;
    await Chat.findByIdAndUpdate(id, {
        msg: req.body.msg,
        created_at: new Date()
    },{
        runValidator : true,new:true
    });
    res.redirect('/chats');
});

// Route to delete a chat
app.delete('/delete/:id', async (req, res) => {
    let { id } = req.params;
    await Chat.findByIdAndDelete(id);
    res.redirect('/chats');
});

// Index Route
app.get('/', (req, res) => {
    res.render('index', { res });
});

// Start the server
app.listen('8080', () => {
    console.log('Server is listening on port 8080');
});
 