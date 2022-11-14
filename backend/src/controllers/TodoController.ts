import type { Request, Response } from 'express';
import { prisma } from '../config/prisma';
import { TodoControllerType } from '../types/api/controller/todo';

class TodoController implements TodoControllerType {
  async index(req: Request, res: Response) {
    const todos = await prisma.todo.findMany();

    return res.json(todos);
  }

  async store(req: Request, res: Response) {
    const data = req.body;

    const todos = await prisma.todo.create({ data });

    return res.json(todos);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: 'Missing id query' });
    }

    const data = req.body;

    const todos = await prisma.todo.update({ data, where: { id } });

    return res.json(todos);
  }

  async delete(req: Request, res: Response): Promise<any> {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: 'Missing id query' });
    }

    await prisma.todo.delete({ where: { id }});

    return res.send();
  }
}

export const todoController = new TodoController();
