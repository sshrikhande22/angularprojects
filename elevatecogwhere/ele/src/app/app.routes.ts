import { Routes } from '@angular/router';
import { TsrviewComponent } from './tsrview/tsrview.component';
import { MissionsComponent } from './missions/missions.component';

export const routes: Routes = [
    { path:'tsr', component:TsrviewComponent },
    { path:'missions', component:MissionsComponent},
   //{ path:'leads', component: LeadsComponent},

   {path: '', redirectTo: '/tsr', pathMatch: 'full' },
    {path: '**', redirectTo: '/tsr'},
];
