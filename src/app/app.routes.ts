// app-routing.module.ts

import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';           // Adjust path as needed
import { ExploreComponent } from './explore/explore.component';  // Adjust path as needed
import { ContactComponent } from './contact/contact.component';  // Adjust path as needed
import { PgnotfdComponent } from './pgnotfd/pgnotfd.component';
import { SinglestateComponent } from './singlestate/singlestate.component';

// Define your routes here
export const routes: Routes = [
  {path: '' , component: HomeComponent },
  {path:'home',component:HomeComponent},
  { path: 'explore', component:ExploreComponent}, 
  {path:'explore/:id',component:SinglestateComponent},
  { path: 'contact', component: ContactComponent }, // Route to the contact page
  {path: '**', component:PgnotfdComponent}

];

