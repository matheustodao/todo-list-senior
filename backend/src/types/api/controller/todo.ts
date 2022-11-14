import type { Request, Response } from 'express';

export type TodoStatus = 'pending' | 'done'

export interface TodoParams {
  id: string,
  name: string,
  status: TodoStatus,
  created_at: Date,
}

export type TodoNewParams = Omit<TodoParams, 'id' | 'created_at'>

export interface TodoUpgradeParams {
  status: TodoStatus,
}

export interface TodoControllerType {
  index(req: Request, res: Response): Promise<any>,
  store(req: Request, res: Response): Promise<any>,
  update(req: Request, res: Response): Promise<any>
  delete(req: Request, res: Response): Promise<any>,
}
