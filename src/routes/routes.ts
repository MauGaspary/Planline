import Express from 'express';
import organizationController from '../controllers/organizationController.js';

const express = Express;

const routes = express.Router();

routes.get('/organization/info', organizationController.index);

export default routes;
