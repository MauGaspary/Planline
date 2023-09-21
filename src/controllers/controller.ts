import UserService from '../services/userService.js';
import Express, { Request, Response } from 'express';

const express = Express;

function dummy(req: Request, res: Response) {
	res.status(200).json({
		message: 'OK',
	});
}

const routes = express.Router();

routes.get('/user', UserService.index);
/* #swagger.tags = ['User']
	#swagger.description = 'Get all users.' */
routes.post('/user', UserService.create);
/* #swagger.responses[200] = { 
	schema: { "$ref": "#/definitions/User" },
	description: "User registered successfully." } */
routes.get('/dummy', dummy);

export default routes;
