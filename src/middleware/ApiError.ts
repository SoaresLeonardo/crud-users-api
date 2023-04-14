export class ApiError {
  public readonly message: string;

  public readonly success: boolean;

  public readonly statusCode: number;

  constructor(message: string, statusCode = 400, success = false) {
    this.message = message;
    this.statusCode = statusCode;
    this.success = success;
  }
}
