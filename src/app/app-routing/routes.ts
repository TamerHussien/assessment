import { Routes } from '@angular/router';
import { SchooldetailComponent } from '../schooldetail/schooldetail.component';
import {SidenavComponent } from '../sidenav/sidenav.component';

export const routes: Routes = [
    {path: 'home', component: SidenavComponent },
    {path: 'schooldetail/:id', component: SchooldetailComponent },
    {path: '', redirectTo: '/home', pathMatch: 'full'}
];
