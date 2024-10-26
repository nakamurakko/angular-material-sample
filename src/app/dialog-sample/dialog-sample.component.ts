import { map, takeWhile } from 'rxjs';

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { DialogResult } from '../data-types/dialog-result';
import { ConfirmDialogComponent, ConfirmDialogData } from './confirm-dialog/confirm-dialog.component';

/**
 * Dialog サンプル。
 */
@Component({
  selector: 'app-dialog-sample',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './dialog-sample.component.html',
  styleUrl: './dialog-sample.component.css'
})
export class DialogSampleComponent {

  /** ダイアログメッセージの結果1 */
  public dialogResult1: string = '';

  /** ダイアログメッセージの結果2 */
  public dialogResult2: string = '';

  public readonly dialog = inject(MatDialog);
  /**
   * コンストラクター。
   *
   * @param dialog MatDialog
   */
  public constructor() { }

  /**
   * ダイアログ呼び出し。
   */
  public onOpenDialog1(): void {
    this.dialogResult1 = '';

    // 確認ダイアログ(ConfirmDialogComponent)を表示する。
    const dialogRef: MatDialogRef<ConfirmDialogComponent, DialogResult> = this.dialog.open(ConfirmDialogComponent, { data: { dialogMessage: '本日は晴天なり' } });

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
    this.dialog.open<ConfirmDialogComponent, ConfirmDialogData, DialogResult>(
      ConfirmDialogComponent,
      {
        height: ConfirmDialogComponent.DefaultDialogHeight,
        width: ConfirmDialogComponent.DefaultDialogWidth,
        data: {
          dialogMessage: '本日は晴天なり'
        }
      }
    )
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
