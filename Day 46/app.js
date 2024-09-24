const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Listing = require('./models/listing.js');
const methodOverride = require('method-override');
const MONGO_URL = 'mongodb://127.0.0.1:27017/stayfinder';
const ejsMate = require('ejs-mate');
const wrapAsync = require('./utils/wrapAsync.js');
const ExpressError = require('./utils/ExpressError.js');
const {listingSchema} = require('./schema.js');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Set up view engine and static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.engine('ejs', ejsMate);

// Connect to MongoDB
async function connectToDatabase() {
    await mongoose.connect(MONGO_URL);
}
connectToDatabase().then(() => console.log('Connected to DB!')).catch((error) => {
    console.log(error);
});
const validateListing =(req,res,next)=>{
    let {error} = listingSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
}

app.get('/', (req, res) => {
    res.send('working');
});
//new route
app.get('/listings/new', (req, res) => {
    res.render('listings/new.ejs');
});

//show route
app.get('/listings/:id', wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render('listings/show.ejs', { listing });

}));
//create route
app.post('/listings',validateListing,wrapAsync(async (req, res,next) => {
    const newListing = new Listing(req.body.listing);
        await newListing.save();
        res.redirect('/listings');

 
    
}));
// edit route
app.get('/listings/:id/edit', wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit", { listing });
}));
//update route
app.put('/listings/:id', validateListing,wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listings/${id}`);
}));

//delete route
app.delete('/listing/:id/delete', wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect(`/listings/`);
}));

//index route
app.get('/listings',wrapAsync( async (req, res) => {
    let allListings = await Listing.find({});
    res.render('listings/index.ejs', { allListings });
}));

app.all('*',(req,res,next)=>{
next(new ExpressError(404,"Page Not Found"));
});

// midleware
app.use((err, req, res, next) => {
    let { message ="Something Went Wrong", statusCode = 500 } = err;
    res.status(statusCode).render('listings/error',{message});
});




// app.get('/testListing', async (req, res) => {
//     let sampleListing = new Listing({
//         title: 'My New Villa',
//         description: 'By the beach',
//         price: 1200,
//         location: 'Gulmarg, Kashmir',
//         country: 'india'
//     })
//     await sampleListing.save();
//     console.log('sample was saved');
//     res.send('successful testing');
// });


// Start the server
app.listen('8080', () => {
    console.log('Server is listening on port 8080');
});
