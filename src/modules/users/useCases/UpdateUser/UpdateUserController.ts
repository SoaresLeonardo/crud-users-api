import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

export class UpdateUserController {
  constructor(private readonly updateUserUseCase: UpdateUserUseCase) {}
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { name, email } = req.body;

    const response = await this.updateUserUseCase.execute({ id, name, email });

    return res.status(200).json({
      statusCode: 200,
      success: true,
      message: "User updated successfully",
      data: response,
    });
  }
}
