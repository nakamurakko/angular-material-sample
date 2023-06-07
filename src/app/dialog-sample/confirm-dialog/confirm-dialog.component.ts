import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { DialogResult } from '../../data-types/dialog-result';

/**
 * 確認ダイアログ。
 */
@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  /** デフォルトで使用する Height。 */
  public static readonly DefaultDialogHeight: string = '200px';
  /** デフォルトで使用する Width。 */
  public static readonly DefaultDialogWidth: string = '400px';

  /** ダイアログメッセージ。 */
  public dialogMessage: string = '';

  /**
   * コンストラクター。
   *
   * @param dialogRef MatDialogRef
   * @param data ConfirmDialogData。
   */
  public constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent, DialogResult>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogData
  ) {
  }

  public ngOnInit(): void {
    if (this.data != null) {
      this.dialogMessage = this.data.dialogMessage;
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
