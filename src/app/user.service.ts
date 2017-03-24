import { Injectable } from '@angular/core';
import { User } from './user'; 

@Injectable()
export class UserService {
  // automatic increment of id's
  lastId: number = 2;
  showLogin: boolean = true;
  defaultUsers = [
      {id: 0, username: 'ralston', password: 'notslar', selected: false},
      {id: 1, username: 'a', password: 'a', selected: false},
      {id: 2, username: 'adrian', password: 'nairda', selected: false}
   ]

  userList: User[] = this.defaultUsers;

  addUser(user: User) {
    if (!user.id) {
      user.id = ++this.lastId;
    }
    this.userList.push(user);
  }

  deleteUser(userId) {
     this.userList= this.userList.filter(user => (user.id !== userId));
  }

  updateUser(userId, editUser) {
     this.userList.map((user, i, array) => {
       if (user.id === userId) {
          if (editUser.username) {
              array[i].username = editUser.username;
          }
          if (editUser.password) {
              array[i].password = editUser.password;
          }
        }
     });
  }

  getAllUsers() {
     return this.userList;
  }

  authenthicate(username, password) {
     var user_exist = this.userList.filter((user) => {
        return (
            (user.username === username) &&
            (user.password === password) 
        );
     });
     return (user_exist.length > 0);
  }
}