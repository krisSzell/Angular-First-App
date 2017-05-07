import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { UserFormComponent } from './user-form/user-form.component';
import { PreventUnsavedChangesGuard } from './prevent-unsaved-changes-guard.service';

export const globalRoutes: Routes = [
    { path: 'users/new', component: UserFormComponent, canDeactivate: [PreventUnsavedChangesGuard] },
    { path: 'users/:id', component: UserFormComponent, canDeactivate: [PreventUnsavedChangesGuard] },
    { path: 'users', component: UsersComponent },
    { path: 'posts', component: PostsComponent },
    { path: '', component: HomeComponent },
    { path: '**', component: HomeComponent }
];