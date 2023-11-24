import Express from 'express';
import organizationController from '../controllers/organizationController.js';
import projectController from '../controllers/projectController.js';
import squadController from '../controllers/squadController.js';
import sessionsController from '../controllers/sessionsController.js';
import userController from '../controllers/userController.js';
import { loggerMiddleware } from '../services/loggerService.js';

const express = Express;

const routes = express.Router();
routes.use(loggerMiddleware);

routes.post('/sessions', sessionsController.index);
routes.delete('/sessions/finalize/:sessionId', sessionsController.finalize);
routes.get('/sessions/available/:squad_id', sessionsController.available);

routes.post('/squad', squadController.create);
routes.get('/squad', squadController.read);
routes.delete('/squad/:squadId', squadController.delete);
routes.get('/squad/:squadId', squadController.getBySquadId);
routes.put('/squad', squadController.put);

routes.post('/user', userController.create);
routes.get('/user', userController.read);
routes.delete('/user/:userId', userController.delete);
routes.get('/user/:userId', userController.getByUserId);
routes.put('/user', userController.put);

routes.post('/project', projectController.create);
routes.get('/project', projectController.read);
routes.delete('/project/:projectId', projectController.delete);
routes.get('/project/:projectId', projectController.getByProjectId);
routes.put('/project', projectController.put);

routes.post('/organization', organizationController.create);
routes.get('/organization', organizationController.read);
routes.delete('/organization/:organizationId', organizationController.delete);
routes.get('/organization/:organizationId', organizationController.getByOrganizationId);
routes.put('/organization', organizationController.put);

export default routes;
