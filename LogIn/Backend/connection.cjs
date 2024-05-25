const mongoose = require('mongoose')
mongoose.pluralize(null)

mongoose.connect("mongodb://0.0.0.0:27017/Login", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(() => {
    console.log("MongoDB Connected");
})
.catch(() => {
    console.log('Failed');
})


const newSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("Information", newSchema)

module.exports = collection