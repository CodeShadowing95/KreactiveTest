import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

import userRoutes from './routes/users.js';

const app = express();

dotenv.config();

app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(cors());

app.use('/user', userRoutes);

// Test route
// app.get('/', (req, res) => {
//   res.send('Hello from the backend!');
// });

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_DB_URI)
.then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
.catch((error) => console.log(error.message));
