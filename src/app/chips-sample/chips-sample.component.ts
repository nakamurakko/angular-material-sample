import { ENTER } from '@angular/cdk/keycodes';
import { Component } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';

/**
 * Chips サンプル。
 */
@Component({
  selector: 'app-chips-sample',
  templateUrl: './chips-sample.component.html',
  styleUrls: ['./chips-sample.component.css']
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
