import { map, takeWhile } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { DialogResult } from '../data-types/dialog-result';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

/**
 * Dialog サンプル。
 */
@Component({
  selector: 'app-dialog-sample',
  templateUrl: './dialog-sample.component.html',
  styleUrls: ['./dialog-sample.component.css']
})
export class DialogSampleComponent implements OnInit {

  /** ダイアログメッセージの結果1 */
  public dialogResult1: string = '';

  /** ダイアログメッセージの結果2 */
  public dialogResult2: string = '';

  /**
   * コンストラクター。
   *
   * @param dialog MatDialog
   */
  public constructor(public dialog: MatDialog) { }

  public ngOnInit(): void {
  }

  /**
   * ダイアログ呼び出し。
   */
  public onOpenDialog1(): void {
    this.dialogResult1 = '';

    // 確認ダイアログ(ConfirmDialogComponent)を表示する。
    const dialogRef: MatDialogRef<ConfirmDialogComponent, DialogResult> = this.dialog.open(ConfirmDialogComponent, { data: '本日は晴天なり' });

    dialogRef.afterClosed()
      .subscribe(result => {
        if (result === undefined) {
          return;
        }

        // 選択結果を表示する。
        this.dialogResult1 = result.toString() + ' : ' + DialogResult[result];
      });
  }

  /**
   * ダイアログ呼び出し。
   * MatDialogRef 変数を宣言しないで書く場合。
   */
  public onOpenDialog2(): void {
    this.dialogResult2 = '';

    // 確認ダイアログ(ConfirmDialogComponent)を表示する。
    this.dialog.open<ConfirmDialogComponent, string, DialogResult>(ConfirmDialogComponent, { data: '本日は晴天なり' })
      .afterClosed()
      .pipe(
        // DialogResult が返ってきた場合のみ処理を続行する。
        takeWhile(x => x !== undefined),
        // 「DialogResult | undefined」→「DialogResult」に置換。
        map(x => x as DialogResult)
      )
      .subscribe(result => {
        // 選択結果を表示する。
        this.dialogResult2 = result.toString() + ' : ' + DialogResult[result];
      });
  }

}
