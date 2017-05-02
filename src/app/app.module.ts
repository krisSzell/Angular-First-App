import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';

import { globalRoutes } from './global-routes';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersComponent,
    PostsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(globalRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
