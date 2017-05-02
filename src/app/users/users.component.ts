import { Component, OnInit } from '@angular/core';
import { UsersService } from 'app/users.service';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users;

  constructor(private _usersService: UsersService) { }

  ngOnInit() {
    this._usersService.getUsers()
      .subscribe(users => this.users = users);
  }

}
