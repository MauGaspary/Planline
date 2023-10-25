import Express from 'express';
import organizationController from '../controllers/organizationController.js';
import projectController from '../controllers/projectController.js';
import squadController from '../controllers/squadController.js';
import sessionsController from '../controllers/sessionsController.js';
import userController from '../controllers/userController.js';

const express = Express;

const routes = express.Router();

routes.get('/squad/info/:project_id', squadController.infoByProjectId);
routes.get('/project/info/:organization_id', projectController.infoByOrganizationId);
routes.get('/organization/info', organizationController.info);
routes.get('/sessions', sessionsController.index);

routes.post('/squad', squadController.create);
routes.get('/squad', squadController.read);
routes.delete('/squad/:squadId', squadController.delete);
routes.put('/squad', squadController.put);

routes.post('/user', userController.create);
routes.get('/user', userController.read);
routes.delete('/user/:userId', userController.delete);

routes.post('/project', projectController.create);
routes.get('/project', projectController.read);
routes.delete('/project/:projectId', projectController.delete);

routes.post('/organization', organizationController.create);
routes.get('/organization', organizationController.read);
routes.delete('/organization/:organizationId', organizationController.delete);

export default routes;
