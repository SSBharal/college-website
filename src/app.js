const path = require('path');
const express = require('express');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 8000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.set('view engine', 'hbs');
app.set("views", template_path);
hbs.registerPartials(partials_path);

// console.log(static_path);
app.use(express.static(static_path));

app.get("/", (req, res) => {
    res.render('index')
})

// app.get("/papers", (req, res) => {
//     res.render('papers')
// })


app.get("/studymaterial", (req, res) => {
    res.render('studymaterial')
})
app.get("/form", (req, res) => {
    res.render('form')
})

// DATA MATERIALS URL

// CSE 
app.get("/cse1", (req, res) => {
    res.render('data/cse/cse1.hbs')
})
app.get("/cse2", (req, res) => {
    res.render('data/cse/cse2.hbs')
})
app.get("/cse3", (req, res) => {
    res.render('data/cse/cse3.hbs')
})
app.get("/cse4", (req, res) => {
    res.render('data/cse/cse4.hbs')
})
app.get("/cse5", (req, res) => {
    res.render('data/cse/cse5.hbs')
})
app.get("/cse6", (req, res) => {
    res.render('data/cse/cse6.hbs')
})
app.get("/cse7", (req, res) => {
    res.render('data/cse/cse7.hbs')
})
app.get("/cse8", (req, res) => {
    res.render('data/cse/cse8.hbs')
})

// ECE
app.get("/ece1", (req, res) => {
    res.render('data/ece/ece1.hbs')
})
app.get("/ece2", (req, res) => {
    res.render('data/ece/ece2.hbs')
})
app.get("/ece3", (req, res) => {
    res.render('data/ece/ece3.hbs')
})
app.get("/ece4", (req, res) => {
    res.render('data/ece/ece4.hbs')
})
app.get("/ece5", (req, res) => {
    res.render('data/ece/ece5.hbs')
})
app.get("/ece6", (req, res) => {
    res.render('data/ece/ece6.hbs')
})
app.get("/ece7", (req, res) => {
    res.render('data/ece/ece7.hbs')
})
app.get("/ece8", (req, res) => {
    res.render('data/ece/ece8.hbs')
})

// MECH
app.get("/mech1", (req, res) => {
    res.render('data/mech/mech1.hbs')
})
app.get("/mech2", (req, res) => {
    res.render('data/mech/mech2.hbs')
})
app.get("/mech3", (req, res) => {
    res.render('data/mech/mech3.hbs')
})
app.get("/mech4", (req, res) => {
    res.render('data/mech/mech4.hbs')
})
app.get("/mech5", (req, res) => {
    res.render('data/mech/mech5.hbs')
})
app.get("/mech6", (req, res) => {
    res.render('data/mech/mech6.hbs')
})
app.get("/mech7", (req, res) => {
    res.render('data/mech/mech7.hbs')
})
app.get("/mech8", (req, res) => {
    res.render('data/mech/mech8.hbs')
})


// BIOTECH
app.get("/biotech1", (req, res) => {
    res.render('data/biotech/biotech1.hbs')
})
app.get("/biotech2", (req, res) => {
    res.render('data/biotech/biotech2.hbs')
})
app.get("/biotech3", (req, res) => {
    res.render('data/biotech/biotech3.hbs')
})
app.get("/biotech4", (req, res) => {
    res.render('data/biotech/biotech4.hbs')
})
app.get("/biotech5", (req, res) => {
    res.render('data/biotech/biotech5.hbs')
})
app.get("/biotech6", (req, res) => {
    res.render('data/biotech/biotech6.hbs')
})
app.get("/biotech7", (req, res) => {
    res.render('data/biotech/biotech7.hbs')
})
app.get("/biotech8", (req, res) => {
    res.render('data/biotech/biotech8.hbs')
})


app.get("*", (req, res) => {
    res.render('404page', {
        errorMsg: "Opps! page not found, Click Here to go back"
    })
})


app.listen(port, () => {
    console.log(`listening to the port no at ${port}`);
})