import { ENTER } from '@angular/cdk/keycodes';
import { Component, signal } from '@angular/core';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';

/**
 * Chips サンプル。
 */
@Component({
  selector: 'app-chips-sample',
  imports: [
    MatChipsModule,
    MatFormFieldModule
  ],
  templateUrl: './chips-sample.component.html',
  styleUrl: './chips-sample.component.css',
})
export class ChipsSampleComponent {

  public numbers = signal<string[]>(['one', 'two', 'three']);

  public readonly separatorKeysCodes: number[] = [ENTER] as const;

  /**
   * 数字を追加する。
   *
   * @param event イベントデータ。
   */
  public addNumer(event: MatChipInputEvent): void {
    if (!event.value) {
      return;
    }

    this.numbers.update(value => [...value, event.value]);
    event.chipInput?.clear();
  }

}
