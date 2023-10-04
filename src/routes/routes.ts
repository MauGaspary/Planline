import Express from 'express';
import organizationController from '../controllers/organizationController.js';
import projectController from '../controllers/projectController.js';

const express = Express;

const routes = express.Router();

routes.get('/project/info/:organization_id', projectController.index);
routes.get('/organization/info', organizationController.index);

export default routes;
