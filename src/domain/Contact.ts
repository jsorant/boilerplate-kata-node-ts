export class Contact {
  public readonly name;
  public readonly phone;

  constructor(name: string, phone: string) {
    this.ensureHasName(name);
    this.name = name;
    this.phone = phone;
  }

  private ensureHasName(name: string) {
    if (name === "") throw new Error("name is missing");
  }
}
