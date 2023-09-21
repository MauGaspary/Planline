import express, { Express } from 'express';
import dotenv from 'dotenv';
import routes from './controllers/controller.js';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './utils/swagger-output.json';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(routes);
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(port, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
