import {Routes, RouterModule} from '@angular/router'
import { ModuleWithProviders } from '@angular/compiler/src/core';

export const routes: Routes = [
   
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'});