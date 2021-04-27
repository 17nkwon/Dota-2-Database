var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Hero = require('./hero');

const dbRoute = 'mongodb+srv://dbUser:dbUserPassword@cluster0-gfzs3.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(dbRoute, { useNewUrlParser: true });
let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// get all the heroes in our database
router.get('/', function (req, res, next) {
    Hero.find(function (err, data) {
        if (err) {
            return res.json({ success: false, error: err });
        } else {
            return res.json({ success: true, info: data })
        }
    });

});

// add a new hero to the database
router.post('/', function (req, res, next) {
    let h = new Hero();
    h.name = req.body.name;
    h.attack = req.body.attack;
    h.attribute = req.body.attribute;
    h.save((err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

// modify a hero's attack type
router.put('/', function (req, res, next) {
    Hero.update({ name: req.body.name }, { attack: req.body.attack }, (err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

// delete a hero from the database
router.delete('/', function (req, res, next) {
    Hero.findOneAndRemove({ name: req.body.name }, (err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

module.exports = router;