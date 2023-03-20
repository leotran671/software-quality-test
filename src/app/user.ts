export class User {
  constructor(
    public email?: string,
    public firstName?: string,
    public lastName?: string,
    public age?: number
  ) { }

  isValid(): boolean {
    const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return (
      this.email != null &&
      //Check le format de l'email avec sa regex
      this.email.match(emailPattern) != null &&
      this.firstName != '' &&
      this.lastName != '' &&
      this.age != null &&
      this.age >= 13
    );
  }
}
