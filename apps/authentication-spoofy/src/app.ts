import express, { Application } from 'express';
import cors from 'cors';
import authenticationRouter from './routers/authenticationRouter';
import * as dotenv from 'dotenv';

dotenv.config();

const app: Application = express();

app.use(cors());

app.use(express.json());

app.use('/api', authenticationRouter);

export default app;
