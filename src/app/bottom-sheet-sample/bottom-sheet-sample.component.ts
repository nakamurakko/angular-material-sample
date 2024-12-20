import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';

import { MetalSelectionSheetComponent } from './metal-selection-sheet/metal-selection-sheet.component';

/**
 * Bottom Sheet サンプル。
 */
@Component({
  selector: 'app-bottom-sheet-sample',
  imports: [
    MatBottomSheetModule,
    MatButtonModule
  ],
  templateUrl: './bottom-sheet-sample.component.html',
  styleUrl: './bottom-sheet-sample.component.css'
})
export class BottomSheetSampleComponent {

  /** 選択した金属名。 */
  public selectedMetalName: string = '';

  /**
   * コンストラクター。
   *
   * @param bottomSheet
   */
  public constructor(
    private bottomSheet: MatBottomSheet
  ) {
  }

  /**
   * 金属選択シートを開く。
   */
  public openMetalSheet(): void {
    this.bottomSheet.open(MetalSelectionSheetComponent)
      .afterDismissed()
      .subscribe((value: string) => {
        this.selectedMetalName = value;
      });
  }

}
