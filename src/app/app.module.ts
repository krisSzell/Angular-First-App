import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { UserFormComponent } from './user-form/user-form.component';
import { SpinnerComponent } from './spinner.component';
import { UsersService } from './users.service';
import { PostsService } from './posts.service';
import { PreventUnsavedChangesGuard } from './prevent-unsaved-changes-guard.service';

import { globalRoutes } from './global-routes';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersComponent,
    PostsComponent,
    HomeComponent,
    UserFormComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(globalRoutes)
  ],
  providers: [UsersService, PostsService, PreventUnsavedChangesGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
