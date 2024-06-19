import { Routes } from '@angular/router';

import { BadgeSampleComponent } from './badge-sample/badge-sample.component';
import { BottomSheetSampleComponent } from './bottom-sheet-sample/bottom-sheet-sample.component';
import { CheckboxSampleComponent } from './checkbox-sample/checkbox-sample.component';
import { ChipsSampleComponent } from './chips-sample/chips-sample.component';
import { DialogSampleComponent } from './dialog-sample/dialog-sample.component';
import { ExpansionPanelSampleComponent } from './expansion-panel-sample/expansion-panel-sample.component';
import { FormFieldSampleComponent } from './form-field-sample/form-field-sample.component';
import { IconSampleComponent } from './icon-sample/icon-sample.component';
import { MenuSampleComponent } from './menu-sample/menu-sample.component';
import { ProgressBarSampleComponent } from './progress-bar-sample/progress-bar-sample.component';
import { SelectSampleComponent } from './select-sample/select-sample.component';

export const routes: Routes = [
  { path: 'badge-sample', component: BadgeSampleComponent },
  { path: 'bottom-sheet-sample', component: BottomSheetSampleComponent },
  { path: 'checkbox-sample', component: CheckboxSampleComponent },
  { path: 'chips-sample', component: ChipsSampleComponent },
  { path: 'dialog-sample', component: DialogSampleComponent },
  { path: 'expansion-panel-sample', component: ExpansionPanelSampleComponent },
  { path: 'form-field-sample', component: FormFieldSampleComponent },
  { path: 'icon-sample', component: IconSampleComponent },
  { path: 'menu-sample', component: MenuSampleComponent },
  { path: 'progress-bar-sample', component: ProgressBarSampleComponent },
  { path: 'select-sample', component: SelectSampleComponent }
];
