import Express from 'express';
import organizationController from '../controllers/organizationController.js';
import projectController from '../controllers/projectController.js';
import squadController from '../controllers/squadController.js';
import sessionsController from '../controllers/sessionsController.js';
import userController from 'src/controllers/userController.js';

const express = Express;

const routes = express.Router();

routes.get('/squad/info/:project_id', squadController.infoByProjectId);
routes.get('/project/info/:organization_id', projectController.infoByOrganizationId);
routes.get('/organization/info', organizationController.info);
routes.get('/sessions', sessionsController.index);

routes.post('/squad', squadController.create);
routes.post('/user', userController.create);
routes.post('/project', projectController.create);
routes.post('/organization', organizationController.create);

routes.delete('/user', userController.delete);
export default routes;
