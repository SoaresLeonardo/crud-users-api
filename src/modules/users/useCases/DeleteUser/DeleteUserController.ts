import { Request, Response } from "express";
import { DeleteUserUseCase } from "./DeleteUserUseCase";
import { ApiError } from "../../../../shared/middleware/ApiError";

export class DeleteUserController {
  constructor(private readonly deleteUserUseCase: DeleteUserUseCase) {}
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    if (!id) {
      throw new ApiError("User ID not provided", 400);
    }

    const response = await this.deleteUserUseCase.execute({ id });

    return res.status(200).json({
      statusCode: 200,
      success: true,
      message: "User deleted successfully",
      data: response,
    });
  }
}
