import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';

export const globalRoutes: Routes = [
    { path: 'users', component: UsersComponent },
    { path: 'posts', component: PostsComponent },
    { path: '', component: HomeComponent },
    { path: '**', component: HomeComponent }
];