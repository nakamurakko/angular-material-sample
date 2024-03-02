import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

/**
 * Form field サンプル。
 */
@Component({
  selector: 'app-form-field-sample',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './form-field-sample.component.html',
  styleUrl: './form-field-sample.component.css'
})
export class FormFieldSampleComponent {

  public inputValue: string = 'input';
  public textAreaValue: string = 'textArea';

}
