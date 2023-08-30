import UserService from '../services/userService.js';
import Express from 'express';

const express = Express;

const routes = express.Router();

routes.get('/user', UserService.index);
routes.post('/user', UserService.create);

export default routes;
