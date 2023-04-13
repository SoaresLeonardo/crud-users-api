import { Request, Response } from "express";
import { GetAllUsersUseCase } from "./GetAllUsersUseCase";

export class GetAllUsersController {
  async handle(req: Request, res: Response) {
    const getAllUsersUseCase = new GetAllUsersUseCase();

    const response = await getAllUsersUseCase.execute();

    return res.status(200).json({
      statusCode: 200,
      success: true,
      message: "Ok here is the list of users",
      data: response,
    });
  }
}
