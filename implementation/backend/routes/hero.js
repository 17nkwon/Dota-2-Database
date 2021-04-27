const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this is the data structure for a hero in our Dota 2 hero data base
const HeroSchema = new Schema(
    {
        name: String,
        attack: String,
        attribute: String
    },
    { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Hero", HeroSchema);