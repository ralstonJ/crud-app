import { Component } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  hasLoggedIn: boolean = false;
  newUser: User = new User();
  editUser: User = new User();
  username: string;
  password: string;

  constructor(private userService: UserService) {}
  
  login() {
    this.hasLoggedIn = this.userService.authenthicate(this.username, this.password);
    if(!this.hasLoggedIn) {
      alert ("Incorrect username or password");
    }
  }

  addUser() {
    if(!this.newUser.username || !this.newUser.password) {
      alert("Please fill all fields")
    }
    this.userService.addUser(this.newUser);
    this.newUser = new User();  
  }

  deleteUser(user) {
    this.userService.deleteUser(user.id);
  }

  updateUser(user) {
    this.userService.updateUser(user.id, this.editUser);
    this.editUser = new User();
    user.selected = false;
  }

  update(event, user, type) {
    this.editUser[type] = event.target.value;
  }

  edit(user: User) {
    user.selected = true;
  }

  cancel(user: User) {
    user.selected = false;
  }

  get users() {
    return this.userService.getAllUsers();
  }
}
