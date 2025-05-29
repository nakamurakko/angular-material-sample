import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';

import { Rank } from '../data-types/rank';

/**
 * Select サンプル。
 */
@Component({
  selector: 'app-select-sample',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  templateUrl: './select-sample.component.html',
  styleUrl: './select-sample.component.css'
})
export class SelectSampleComponent {

  /** 選択値。 */
  public selectedValue: string = '';

  /** ランク一覧。 */
  public readonly ranks: Array<Rank> = new Array<Rank>(
    { id: 0, value: '松' },
    { id: 1, value: '竹' },
    { id: 2, value: '梅' },
  );

  /**
   * 選択値変更処理。
   *
   * @param e イベントデータ。
   */
  public onSelectionChange(e: MatSelectChange): void {
    this.selectedValue = (e.value as Rank).value;
  }

}
