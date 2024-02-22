import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { dbConnect } from './db/dbConnect.js';
import urlRoute from './routes/url.js';
import userRoute from './routes/user.js';

const app = express();

// Connect to MongoDB
dbConnect()
    .then((res) => {
        console.log(
            'Connected to MongoDB on',
            res.connection.host + ':' + res.connection.port
        );
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB', err);
    });

// Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Routes
app.use('/url', urlRoute);
app.use('/user', userRoute);

// Start server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
