import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { ApiError } from "../../../../shared/middleware/ApiError";
import { validateEmail } from "../../validators/EmailValidator";

export class CreateUserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email } = req.body;

    if (!name) {
      throw new ApiError("Name was not provided in the request", 400);
    }

    if (!email) {
      throw new ApiError("E-mail was not provided in the request", 400);
    }

    if (!validateEmail(email)) {
      throw new ApiError("Invalid email", 400);
    }

    const response = await this.createUserUseCase.execute({ name, email });

    return res.status(201).json({
      statusCode: 201,
      success: true,
      message: "Congratulations, your user has been successfully registered!",
      data: response,
    });
  }
}
