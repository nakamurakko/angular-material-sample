import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BadgeSampleComponent } from './badge-sample/badge-sample.component';
import { CheckboxSampleComponent } from './checkbox-sample/checkbox-sample.component';
import { ConfirmDialogComponent } from './dialog-sample/confirm-dialog/confirm-dialog.component';
import { DialogSampleComponent } from './dialog-sample/dialog-sample.component';
import { FormFieldSampleComponent } from './form-field-sample/form-field-sample.component';
import { MenuSampleComponent } from './menu-sample/menu-sample.component';
import { ProgressBarSampleComponent } from './progress-bar-sample/progress-bar-sample.component';
import { SelectSampleComponent } from './select-sample/select-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    BadgeSampleComponent,
    CheckboxSampleComponent,
    ConfirmDialogComponent,
    DialogSampleComponent,
    FormFieldSampleComponent,
    MenuSampleComponent,
    ProgressBarSampleComponent,
    SelectSampleComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatBadgeModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatProgressBarModule,
    MatSelectModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
