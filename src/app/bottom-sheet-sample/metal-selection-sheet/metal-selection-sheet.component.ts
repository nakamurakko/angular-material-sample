import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';

/**
 * Bottom Sheet コンポーネント。
 */
@Component({
  selector: 'app-metal-selection-sheet',
  standalone: true,
  imports: [
    MatListModule
  ],
  templateUrl: './metal-selection-sheet.component.html',
  styleUrl: './metal-selection-sheet.component.css'
})
export class MetalSelectionSheetComponent {

  /**
   * コンストラクター。
   *
   * @param bottomSheetRef
   */
  public constructor(
    private bottomSheetRef: MatBottomSheetRef<MetalSelectionSheetComponent>
  ) {
  }

  /**
   * onClick。
   */
  public onClick(event: MouseEvent, metalName: string): void {
    this.bottomSheetRef.dismiss(metalName);
  }

}
