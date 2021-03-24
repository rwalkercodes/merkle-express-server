import { Pool } from "pg";

export const connectionPool: Pool = new Pool({
  user: "postgres",
  password: "rmw12612",
  database: "merkle_assessment",
  host: "localhost",
  port: 5432,
});
