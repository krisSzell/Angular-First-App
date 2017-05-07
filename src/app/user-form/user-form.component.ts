import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserFormCustomValidators } from './user-form-custom-validators';

import { UsersService } from '../users.service';
import { User } from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  form: FormGroup;
  user = new User();
  userId;
  title = 'Add user';

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute,
    private _usersService: UsersService
  ) { }

  ngOnInit() {

    this.userId = this._route.snapshot.params['id'];
    if (this.userId != null) {
      this.title = 'Edit user';
      this._usersService.getUser(this.userId)
        .subscribe(user => this.user = user);
    }


    this.form = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['',
        UserFormCustomValidators.email
      ],
      phone: [],
      address: this._formBuilder.group({
        street: [],
        suite: [],
        city: [],
        zipcode: []
      })
    });
  }

  save() {
    if (this.userId != null) {
      this._usersService.updateUser(this.form.value, this.userId).subscribe(res => {
        this.cleanupForm();
      });
    }
    else {
      this._usersService.saveUser(this.form.value).subscribe(res => {
        this.cleanupForm();
      });
    }

  }

  cleanupForm() {
    this.form.markAsPristine();
    this._router.navigate(['users']);
  }
}
