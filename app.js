import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';

// Load environment variables from .env file
dotenv.config();

const app = express();

// Enable CORS for all routes
app.use(cors());

// Body parser (configure it before defining routes)
app.use(bodyParser.json());

// Import routes
import indexRouter from './routes/indexRouter.js';
import collectionRouter from './routes/collectionRouter.js'

// Define routes
app.use('/', indexRouter);
app.use('/collection', collectionRouter)

const port = process.env.SERVER_PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
