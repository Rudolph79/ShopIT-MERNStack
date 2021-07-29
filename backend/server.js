const app = require('./app');
// const path = require('path');
const connectDatabase = require('./config/database');

const dotenv = require('dotenv');

// Handle Uncaught exception
process.on('uncaughtException', err => {
    console.log(`ERROR: ${err.stack}`);
    console.log('Shutting down due to uncaught exception');
    process.exit(1);
})

// Setting up config file
dotenv.config({ path: 'backend/config/config.env' });
// console.log(process.env.PORT);


// connecting to database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
})

// Handle Unhandled Promise rejections
process.on('unhandledRejection', err => {
    console.log(`ERROR: ${err.message}`);
    console.log('Shutting down the server due to unhandle Promise rejection');
    server.close(() => {
        process.exit(1);
    });
})
