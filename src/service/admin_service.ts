import { PoolClient } from "pg";
import { connectionPool } from ".";
import { sqlUserToJSUser } from "../converter/sqlUserToJSUser";

export async function getUsers() {
  let client: PoolClient | undefined;

  try {
    client = await connectionPool.connect();
    let result = await client.query(
      "SELECT * FROM registered_users ORDER BY registration_date DESC"
    );
    return result.rows.map(sqlUserToJSUser);
  } catch (err) {
    console.log(err);
    return "An error occurred";
  } finally {
    client && client.release();
  }
}
