import { Routes } from '@angular/router';

import {Home} from './home/home';
import {Product} from './product/product';
import {Details} from './details/details';

export const routes: Routes = [
    {path: 'home', component:Home},
    {path: 'product', component:Product},
    {path: 'details/:id', component:Details},
    { path: '', redirectTo: 'products', pathMatch: 'full' }
];
