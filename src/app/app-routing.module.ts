import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BadgeSampleComponent } from './badge-sample/badge-sample.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'badge-sample', component: BadgeSampleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
