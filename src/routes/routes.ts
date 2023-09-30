import Express from 'express';
import organizationController from '../controllers/organizationController.js';
import projectController from '../controllers/projectController.js';

const express = Express;

const routes = express.Router();

routes.get('/organization', organizationController.index);
routes.get('/project/info/:organization_id', projectController.index);

export default routes;
