import { Component, OnInit } from '@angular/core';

/**
 * メニューサンプル。
 */
@Component({
  selector: 'app-menu-sample',
  templateUrl: './menu-sample.component.html',
  styleUrls: ['./menu-sample.component.css']
})
export class MenuSampleComponent implements OnInit {

  public selectedValue: string = '';

  public ngOnInit(): void {
  }

  /**
   * クリック処理。
   *
   * @param e イベントデータ。
   * @param value クリックしたボタンを認識する値。
   */
  public onClick(e: MouseEvent, value: string): void {
    this.selectedValue = value + ' をクリック';
  }
}
