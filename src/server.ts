import "express-async-errors";
import express, { NextFunction, Request, Response, json } from "express";
import routes from "./routes";
import dotenv from "dotenv";
import { ApiError } from "./middleware/ApiError";

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

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

app.listen(port, () => console.log(`Server is running in port ${port}`));
