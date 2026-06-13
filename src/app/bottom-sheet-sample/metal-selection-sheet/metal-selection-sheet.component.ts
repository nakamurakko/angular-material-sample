import { Component, inject } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

/**
 * Bottom Sheet コンポーネント。
 */
@Component({
  selector: 'app-metal-selection-sheet',
  imports: [
    MatButtonModule,
    MatListModule
  ],
  templateUrl: './metal-selection-sheet.component.html',
  styleUrl: './metal-selection-sheet.component.css',
})
export class MetalSelectionSheetComponent {

  private bottomSheetRef = inject(MatBottomSheetRef<MetalSelectionSheetComponent>);

  /**
   * onClick。
   */
  public onClick(event: PointerEvent, metalName: string): void {
    this.bottomSheetRef.dismiss(metalName);
  }

}
