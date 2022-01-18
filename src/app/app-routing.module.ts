import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BadgeSampleComponent } from './badge-sample/badge-sample.component';
import { CheckboxSampleComponent } from './checkbox-sample/checkbox-sample.component';
import { DialogSampleComponent } from './dialog-sample/dialog-sample.component';
import { FormFieldSampleComponent } from './form-field-sample/form-field-sample.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'badge-sample', component: BadgeSampleComponent },
  { path: 'checkbox-sample', component: CheckboxSampleComponent },
  { path: 'dialog-sample', component: DialogSampleComponent },
  { path: 'form-field-sample', component: FormFieldSampleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
