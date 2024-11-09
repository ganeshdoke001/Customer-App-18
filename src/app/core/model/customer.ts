export class Customer {
  id: number;
  name: string;
  email: string;
  phone: string;

  public constructor() {
    this.id = 0;
    this.name = '';
    this.email = '';
    this.phone = ' ';
  }

  public getId(): number {
    return this.id;
  }
  public getName(): string {
    return this.name;
  }
  public getEmail(): string {
    return this.email;
  }
  public getPhone(): string {
    return this.phone;
  }
  public setId(id: number) {
    this.id = id;
  }
  public setName(name: string) {
    this.name = name;
  }
  public setEmail(email: string) {
    this.email = email;
  }
  public setPhone(phone: string) {
    this.phone = phone;
  }
}
