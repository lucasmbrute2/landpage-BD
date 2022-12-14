import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListUsersUseCase } from "./ListUsersUseCase";

export class ListUsersController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listUserUseCase = container.resolve(ListUsersUseCase)
    const users = await listUserUseCase.execute()

    return res.status(200).send(users)
  }
}