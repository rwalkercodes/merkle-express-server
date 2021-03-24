export class UserDTO {
  first_name!: string; // not null
  last_name!: string; // not null
  address_1!: string; // not null
  address_2!: string | null; // nullable
  city!: string; // not null
  state_abbrev!: string; // not null
  zip_code!: string; // not null
  country!: string; // not null
  registration_date!: string; // current timestamp
}
