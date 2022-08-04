import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const createCarUseCase = container.resolve(CreateUserUseCase)

    const { birthday, email, name, phone } = req.body

    const user = await createCarUseCase.execute({
      name,
      email,
      birthday,
      phone
    })

    return res.status(201).json(user)
  }
}