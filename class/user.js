export class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  modifyUser(name) {
    this.name = name
  }
}