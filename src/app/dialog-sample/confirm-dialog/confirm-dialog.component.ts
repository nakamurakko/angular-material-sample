import { Component, inject, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { DialogResult } from '../../data-types/dialog-result';

/**
 * 確認ダイアログ。
 */
@Component({
  selector: 'app-confirm-dialog',
  imports: [
    MatButtonModule,
    MatDialogModule
  ],
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.css',
})
export class ConfirmDialogComponent implements OnInit {

  /** デフォルトで使用する Height。 */
  public static readonly DefaultDialogHeight: string = '200px';
  /** デフォルトで使用する Width。 */
  public static readonly DefaultDialogWidth: string = '400px';

  public readonly dialogRef = inject(MatDialogRef<ConfirmDialogComponent, DialogResult>);

  public readonly data = inject<ConfirmDialogData>(MAT_DIALOG_DATA);

  /** ダイアログメッセージ。 */
  public dialogMessage = signal<string>('');

  public ngOnInit(): void {
    if (this.data?.dialogMessage) {
      this.dialogMessage.set(this.data.dialogMessage);
    }
  }

  /**
   * OK ボタンクリック処理。DialogResult.OKを設定する。
   */
  public onOk(): void {
    this.dialogRef.close(DialogResult.OK);
  }

  /**
   * Cancel ボタンクリック処理。DialogResult.Cancelを設定する。
   */
  public onCancel(): void {
    this.dialogRef.close(DialogResult.Cancel);
  }

}

/**
 * ConfirmDialogComponent.data 用インターフェイス。
 */
export interface ConfirmDialogData {

  /** ダイアログメッセージ */
  dialogMessage: string

}
