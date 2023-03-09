export class User {
  constructor(
    public email?: string,
    public firstName?: string,
    public lastName?: string,
    public age?: number
  ) {}

    isValid(): boolean {
      const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      return (
        this.email != null &&
        this.email.match(emailPattern) != null &&
        this.firstName != '' &&
        this.lastName != '' &&
        this.age != null &&
      typeof this.age === 'number' && // Vérifier que l'âge est un nombre
        this.age >= 13
      );
    }
}
