import { todoController } from '../controllers/TodoController';
import { Router } from 'express';

const routes = Router();

routes.get('/todos', todoController.index);
routes.post('/todos', todoController.store);
routes.patch('/todos/:id', todoController.update);
routes.delete('/todos/:id', todoController.delete);

export { routes };
