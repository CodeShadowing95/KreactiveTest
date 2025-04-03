import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

import authRoutes from './routes/authRoutes.js';

const app = express();

dotenv.config();

app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(cors());

// Defining routes
app.use('/auth', authRoutes);

// Test route
// app.get('/', (req, res) => {
//   res.send('Hello from the backend!');
// });

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_CONNECTION_URL)
.then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
.catch((error) => console.log(error.message));
