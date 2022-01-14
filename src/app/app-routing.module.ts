import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BadgeSampleComponent } from './badge-sample/badge-sample.component';
import { CheckboxSampleComponent } from './checkbox-sample/checkbox-sample.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'badge-sample', component: BadgeSampleComponent },
  { path: 'checkbox-sample', component: CheckboxSampleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
