import UserService from '../services/userService.js';
import Express, { Request, Response } from 'express';

const express = Express;

function justApiTest(req: Request, res: Response) {
	res.status(200).json({
		message: 'OK',
	});
}

const routes = express.Router();

/**
 * @swagger
 * /user:
 *    get:
 *      description: Returns all users
 *      responses:
 *        '200':
 *          description: Successfully returned all user
 *        '500':
 *          description: Failed to query for users
 *    put:
 *      description: Use to insert a new user
 *    parameters:
 *      - name: firstName
 *        in: body
 *        description: Firstname of the user
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *      - name: lastName
 *        in: body
 *        description: lastName of the user
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '200':
 *        description: Successfully inserted a user
 *      '500':
 *        description: Failed to insert a user
 */
routes.get('/user', UserService.index);
routes.post('/user', UserService.create);
routes.get('/just-api-test', justApiTest);

export default routes;
