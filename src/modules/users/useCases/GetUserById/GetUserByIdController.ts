import { Request, Response } from "express";
import { GetUserByIdUseCase } from "./GetUserByIdUseCase";
import { ApiError } from "../../../../shared/middleware/ApiError";

export class GetUserByIdController {
  constructor(private readonly getUserByIdUseCase: GetUserByIdUseCase) {}
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    if (!id) {
      throw new ApiError("User ID not provided", 400);
    }

    const response = await this.getUserByIdUseCase.execute({ id });

    return res.status(200).json({
      statusCode: 200,
      success: true,
      message: "Here is your quest",
      data: response,
    });
  }
}
