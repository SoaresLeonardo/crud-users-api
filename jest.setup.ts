import dotenv from "dotenv";
import { v4 as uuid } from "uuid";

dotenv.config({ path: ".env.test" });

const schema = `t_${uuid()}`;

console.log(uuid());

process.env.DATABASE_URL = `${process.env.DATABASE_URL}${schema}`;
