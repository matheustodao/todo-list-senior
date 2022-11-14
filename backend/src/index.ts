import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';

import { routes } from './routes';

const { HOST, PORT } = process.env;

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(PORT, () => console.debug(`🔥 Server Started at http://${HOST}:${PORT}`));
