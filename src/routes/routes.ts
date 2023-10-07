import Express from 'express';
import organizationController from '../controllers/organizationController.js';
import projectController from '../controllers/projectController.js';
import squadController from '../controllers/squadController.js';

const express = Express;

const routes = express.Router();

routes.get('/squad/info/:project_id', squadController.infoByProjectId);
routes.get('/project/info/:organization_id', projectController.infoByOrganizationId);
routes.get('/organization/info', organizationController.info);

export default routes;
