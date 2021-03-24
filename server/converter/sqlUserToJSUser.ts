import { UserDTO } from "../dto/user_dto";
import { User } from "../model/user";

export const sqlUserToJSUser = (user: UserDTO): User => {
  return new User(
    user.first_name,
    user.last_name,
    user.address_1,
    user.address_2,
    user.city,
    user.state_abbrev,
    user.zip_code,
    user.country,
    user.registration_date
  );
};
