import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserFormCustomValidators } from './user-form-custom-validators';

import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _usersService: UsersService
  ) { }

  ngOnInit() {
    this.form = this._formBuilder.group({
      user: this._formBuilder.group({
        name: ['', Validators.required],
        email: ['',
          UserFormCustomValidators.email
        ],
        phone: []
      }),
      address: this._formBuilder.group({
        street: [],
        suite: [],
        city: [],
        zipcode: []
      })
    });
  }

  save() {
    this._usersService.saveUser(this.form.value).subscribe(res => {
      this.form.markAsPristine();
      this._router.navigate(['users']);
    });
  }

}
