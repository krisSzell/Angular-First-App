import { UserFormComponent } from './user-form/user-form.component';
import { CanDeactivate } from '@angular/router';

export class PreventUnsavedChangesGuard implements CanDeactivate<UserFormComponent> {
    canDeactivate(component: UserFormComponent) {
        if (component.form.dirty) {
            return confirm("You have unsaved changes, are you sure you want to leave this page?");
        }

        return true;
    }
}