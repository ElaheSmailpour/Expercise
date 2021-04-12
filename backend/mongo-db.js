
const mongoose = require("mongoose");


let addressString = process.env.mongo || "m";
let optionen = { useNewUrlParser: true, useUnifiedTopology: true };

const verbindeDB = () => {

    
    mongoose.connect(addressString, optionen).then( (mongooseModul) => {
        console.log("Bin mit der Datenbank verbunden");
     

    } ).catch( (fehler) => {
        console.error("Fehler mit MongoDB: "+fehler);
    } );

}

module.exports = verbindeDB;
