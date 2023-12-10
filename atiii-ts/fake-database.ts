import { User } from "./types/types";

class FakeDatabase {
  private users: User[];
  
  constructor() {
    console.log('FakeDatabase constructor called');
    this.users = [];
  }

  public addUser(user: User): void {
    this.users.push(user);
  }

  public removeUser(index: number): void {
    this.users.splice(index, 1);
  }

  public listUsers(): User[] {
    return this.users;
  }

  public getUser(index: number): User {
    return this.users[index];
  }

}
const FakeDatabaseSingleton = new FakeDatabase();
export default FakeDatabaseSingleton;