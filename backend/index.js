const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const cookieParser = require('cookie-parser');
const databaseConnection = require('./utils/database');
const userRoute = require('./routes/userRoute');

//Connection to the Database
databaseConnection();

dotenv.config({
  path: '.env',
});

const app = express();

//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
  origin: `https://rococo-bunny-2d8d54.netlify.app`,
  // credentials: true,
  // allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));

//api
app.use('/api/v1/user', userRoute);

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
