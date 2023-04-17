import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";
import { ApiError } from "../../../../shared/middleware/ApiError";
import { validateEmail } from "../../validators/EmailValidator";

export class UpdateUserController {
  constructor(private readonly updateUserUseCase: UpdateUserUseCase) {}
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { name, email } = req.body;

    if (!id) {
      throw new ApiError("User ID not provided", 400);
    }

    if (!name) {
      throw new ApiError("User name not provided", 404);
    }

    if (!email) {
      throw new ApiError("User email not provided", 404);
    }

    if (!validateEmail(email)) {
      throw new ApiError("Invalid email", 400);
    }

    const response = await this.updateUserUseCase.execute({ id, name, email });

    return res.status(200).json({
      statusCode: 200,
      success: true,
      message: "User updated successfully",
      data: response,
    });
  }
}
