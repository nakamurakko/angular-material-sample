import { Component } from '@angular/core';

/**
 * Checkbox サンプル。
 */
@Component({
  selector: 'app-checkbox-sample',
  templateUrl: './checkbox-sample.component.html',
  styleUrls: ['./checkbox-sample.component.css']
})
export class CheckboxSampleComponent {

  /** チェックボックスの選択値 */
  public isSunny: boolean = true;

}
