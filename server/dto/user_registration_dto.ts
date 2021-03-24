export interface UserRegistrationDTO {
  firstName: string; // not null
  lastName: string; // not null
  address1: string; // not null
  address2: string | null; // nullable
  city: string; // not null
  stateAbbrev: string; // not null
  zipCode: string; // not null
  country: string; // not null
}
