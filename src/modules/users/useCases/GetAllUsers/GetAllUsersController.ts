import { Request, Response } from "express";
import { GetAllUsersUseCase } from "./GetAllUsersUseCase";

export class GetAllUsersController {
  constructor(private readonly getAllUsersUseCase: GetAllUsersUseCase) {}
  async handle(req: Request, res: Response): Promise<Response> {
    const response = await this.getAllUsersUseCase.execute();

    return res.status(200).json({
      statusCode: 200,
      success: true,
      message: "Ok here is the list of users",
      data: response,
    });
  }
}
