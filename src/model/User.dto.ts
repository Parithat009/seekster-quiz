
export class UserDTO {
  email: string
  id: number
  name: string
  phone: string
  username: string
  website: string
  company: Company
  address: Address
}

class Company {
  bs: string
  catchPhrase: string
  name: string
}

class Address {
  street: string
  suite: string
  zipcode: string
  city: string
  geo: Geo
}

class Geo {
  lat: string
  lng: string
}
