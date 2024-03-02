import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

/**
 * Checkbox サンプル。
 */
@Component({
  selector: 'app-checkbox-sample',
  standalone: true,
  imports: [
    FormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './checkbox-sample.component.html',
  styleUrl: './checkbox-sample.component.css'
})
export class CheckboxSampleComponent {

  /** チェックボックスの選択値 */
  public isSunny: boolean = true;

}
