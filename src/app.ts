import "express-async-errors";
import express, { NextFunction, Request, Response, json } from "express";
import routes from "./routes";
import cors from "cors";

import { ApiError } from "./shared/middleware/ApiError";

const app = express();

app.use(cors());

app.use(json());

app.use(routes);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof ApiError) {
    return res.status(error.statusCode).json({
      statusCode: error.statusCode,
      message: error.message,
      success: error.success,
    });
  }
  return res.status(500).json({
    status: "error",
    message: `Internal Server Error ${error.message}`,
  });
});

export { app };
