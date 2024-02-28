
import mongoose from "mongoose";
import mongodb from "mongodb";
//localhost:27017/${db};
//localhost:27017/tp5;
const URI ="mongodb://localhost:27017/tp5"

const MongoDBbooks = {
    initialize: () => {
        try {
            const client = mongoose.connect(URI);
            client.then(() => {return console.log(`successfully connected to DB: ${db}`)})
                .catch((err)=> {console.log(err)})
        } catch(err) {
            throw Error(err)
        }
    },
    createSchema: () => {
        var albumSchema = new mongoose.Schema({
            titre : {type : String, required: true},
            auteur : {type : String, required: true},
            decription : String,
            format : { type : String, enum: ["poche","manga","audio"], default : "poche"}
        });
        var albumModel = mongoose.model('album', albumSchema);
        var monLivre = new albumModel({titre:"Le voleur de feu",auteur:"KON"});
        monLivre.decription = "Masterclass intergalactique";
        monLivre.save().then(function () {
            console.log('Livre ajouté avec succès !');
            // mongoose.connection.close();
        }).catch(function (err) {
            throw err;
        })
    }
}

export default MongoDBbooks;