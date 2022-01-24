import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BadgeSampleComponent } from './badge-sample/badge-sample.component';
import { CheckboxSampleComponent } from './checkbox-sample/checkbox-sample.component';
import { DialogSampleComponent } from './dialog-sample/dialog-sample.component';
import { FormFieldSampleComponent } from './form-field-sample/form-field-sample.component';
import { MenuSampleComponent } from './menu-sample/menu-sample.component';
import { SelectSampleComponent } from './select-sample/select-sample.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'badge-sample', component: BadgeSampleComponent },
  { path: 'checkbox-sample', component: CheckboxSampleComponent },
  { path: 'dialog-sample', component: DialogSampleComponent },
  { path: 'form-field-sample', component: FormFieldSampleComponent },
  { path: 'menu-sample', component: MenuSampleComponent },
  { path: 'select-sample', component: SelectSampleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
