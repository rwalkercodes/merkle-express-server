import { Pool } from "pg";

export const connectionPool: Pool = new Pool({
  user: "postgres",
  password: "rmw12612",
  database: "postgres",
  host: "database-2.cgjxl6ure4bj.us-east-2.rds.amazonaws.com",
  port: 5432,
});

connectionPool.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});
