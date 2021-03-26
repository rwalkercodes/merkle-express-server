import { PoolClient } from "pg";
import { connectionPool } from ".";
import { UserRegistrationDTO } from "../dto/user_registration_dto";

export async function register(user: UserRegistrationDTO) {
  let client: PoolClient | undefined;
  let didRegister: boolean = false;

  try {
    client = await connectionPool.connect();

    let query =
      "INSERT INTO registered_users (first_name, last_name, address_1, address_2, city, state_abbrev, zip_code, country) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id";

    let result = await client.query(query, [
      user.firstName,
      user.lastName,
      user.address1,
      user.address2 == "" ? null : user.address2,
      user.city,
      user.stateAbbrev,
      user.zipCode,
      user.country,
    ]);

    result ? (didRegister = true) : null;

    return didRegister;
  } catch (err) {
    console.log(err);
    return "An error occurred";
  } finally {
    client && client.release();
  }
}
