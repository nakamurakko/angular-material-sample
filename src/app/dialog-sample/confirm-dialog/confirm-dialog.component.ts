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

  /** ダイアログメッセージ。 */
  public dialogMessage: string = '';

  /**
   * コンストラクター。
   *
   * @param dialogRef MatDialogRef
   * @param data ダイアログメッセージ。
   */
  public constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent, DialogResult>, @Inject(MAT_DIALOG_DATA) public data: string) { }

  public ngOnInit(): void {
    if (this.data != null) {
      this.dialogMessage = this.data;
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
