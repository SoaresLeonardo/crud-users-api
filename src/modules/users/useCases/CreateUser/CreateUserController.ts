import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}
  async handle(req: Request, res: Response): Promise<Response> {
    
    const { name, email } = req.body;

    const response = await this.createUserUseCase.execute({ name, email });

    return res.status(201).json({
      statusCode: 201,
      success: true,
      message: "Congratulations, your user has been successfully registered!",
      data: response,
    });
  }
}
