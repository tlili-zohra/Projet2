const mongoose = require("mongoose");

const db = "bookLibrary";
const uri = `mongodb+srv://tlilizohra12:tlilizohra12@cluster0.vxfku.mongodb.net/${db}?retryWrites=true&w=majority&appName=Cluster0`;

const connectDb = () => {
  mongoose.connect(uri).then(console.log("Connected to db"));
};
//mongoose.Schema({});
//mongoose.model
module.exports = connectDb;
