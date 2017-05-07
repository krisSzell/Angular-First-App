import { Component, OnInit } from '@angular/core';
import { UsersService } from 'app/users.service';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any[];

  constructor(private _usersService: UsersService) { }

  ngOnInit() {
    this._usersService.getUsers()
      .subscribe(users => this.users = users);
  }

  delete(user) {
    if (confirm("Are you sure you want to delete " + user.name + "?")) {
      var index = this.users.indexOf(user);
      this.users.splice(index, 1);

      this._usersService.deleteUser(user.id)
        .subscribe(null, err => {
          alert("Could not delete user.");
          this.users.splice(index, 0, user);
        }, () => {
          console.log("Succesfully deleted " + user.name);
        });
    }


  }

}
