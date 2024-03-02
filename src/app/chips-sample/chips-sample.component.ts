import { ENTER } from '@angular/cdk/keycodes';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';

/**
 * Chips サンプル。
 */
@Component({
  selector: 'app-chips-sample',
  standalone: true,
  imports: [
    CommonModule,
    MatChipsModule,
    MatFormFieldModule
  ],
  templateUrl: './chips-sample.component.html',
  styleUrl: './chips-sample.component.css'
})
export class ChipsSampleComponent {

  public numbers: Array<string> = ['one', 'two', 'three'];

  public readonly separatorKeysCodes: Array<number> = [ENTER];

  /**
   * 数字を追加する。
   *
   * @param event イベントデータ。
   */
  public addNumer(event: MatChipInputEvent): void {
    if (!event.value) {
      return;
    }

    this.numbers.push(event.value);
    event.chipInput?.clear();
  }

}
