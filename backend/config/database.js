const mongoose = require('mongoose');

const connectDatabase = () => {
    // mongoose.connect(process.env.DB_LOCAL_URI, {
    mongoose.connect("mongodb://localhost:27017/shop_it", {
    // mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    }).then(con => {
        console.log(`MongoDB Database connected with HOST: ${con.connection.host}`)
        console.log(process.env.DB_LOCAL_URI)
    });
}

module.exports = connectDatabase;
