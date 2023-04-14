import { Request, Response } from "express";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

export class DeleteUserController {
  constructor(private readonly deleteUserUseCase: DeleteUserUseCase) {}
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const response = await this.deleteUserUseCase.execute({ id });

    return res.status(200).json({
      statusCode: 200,
      success: true,
      message: "User deleted successfully",
      data: response,
    });
  }
}
