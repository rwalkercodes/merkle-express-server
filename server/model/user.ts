export class User {
  firstName: string; // not null
  lastName: string; // not null
  address1: string; // not null
  address2: string | null; // nullable
  city: string; // not null
  stateAbbrev: string; // not null
  zipCode: string; // not null
  country: string; // not null
  registrationDate: string; // current timestamp

  constructor(
    firstName: string,
    lastName: string,
    address1: string,
    address2: string | null,
    city: string,
    stateAbbrev: string,
    zipCode: string,
    country: string,
    registrationDate: string
  ) {
    (this.firstName = firstName),
      (this.lastName = lastName),
      (this.address1 = address1),
      (this.address2 = address2),
      (this.city = city),
      (this.stateAbbrev = stateAbbrev),
      (this.zipCode = zipCode),
      (this.country = country),
      (this.registrationDate = registrationDate);
  }
}
