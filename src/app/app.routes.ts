import { Routes } from '@angular/router';
import { BirthdayFormComponent } from './pages/birthday-form/birthday-form.component';
import { BirthdayCardComponent } from './pages/birthday-card/birthday-card.component';

export const routes: Routes = [
    {
        path: '',
        component: BirthdayFormComponent
    },
    {
        path: ':cardId',
        component: BirthdayCardComponent
    }
];
