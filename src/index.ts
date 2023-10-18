import express, { Express } from 'express';
import dotenv from 'dotenv';
import routes from './routes/routes.js';
import cors from 'cors';
import sessionService from './services/sessionService.js';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
	sessionService.getAllCurrentSessions();
	console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
