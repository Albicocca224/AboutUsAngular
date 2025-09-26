import { Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';

export const routes: Routes = [
  { path: 'about-us', component: AboutUsComponent },
  { path: '', redirectTo: 'about-us', pathMatch: 'full' },
  { path: '**', redirectTo: 'about-us' }
];
