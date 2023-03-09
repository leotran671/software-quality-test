export class User {
    email: string;
    firstName: string;
    lastName: string;
    age: number;
  
    constructor(email: string, firstName: string, lastName: string, age: number) {
      this.email = email;
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }

    isValid(): boolean {
      const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      return (
        this.email != null &&
        this.email.match(emailPattern) != null &&
        this.firstName != '' &&
        this.lastName != '' &&
        this.age != null &&
        this.age >= 13
      );
    }
}
